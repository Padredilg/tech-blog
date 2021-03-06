const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
        })
        .then(dbPostData => {
            console.log(req.session);
            // serialize data before passing to template
            const posts = dbPostData.map(post => {
                post = post.get({ plain: true })
                if(post.user_id === req.session.user_id){
                    post.edit = true;
                }
                else{
                    post.edit = false;
                }
                return post;
            });
            
            res.render('dashboard', { 
                posts, 
                loggedIn: true,
                username: req.session.username
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'content',
            'title',
            'created_at',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
        return;
        }
        
        const post = dbPostData.get({ plain: true });
         
        //If user isnt the owner, then he/she can't edit post
        if(post.user_id !== req.session.user_id){
            res.redirect('/dashboard')
        }

        res.render('edit-post', { 
            post, 
            loggedIn: true,
            username: req.session.username
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;