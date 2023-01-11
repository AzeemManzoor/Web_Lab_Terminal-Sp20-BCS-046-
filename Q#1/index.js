
    var limit = 30;
    var skip = 0;
    var total;

    function getPosts() {
        $.ajax({
            url: 'https://dummyjson.com/posts',
            data: {
                limit: limit,
                skip: skip
            },
            success: function(data) {
                total = data.total;
                displayPosts(data.posts);
                displayPagination();
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    function displayPosts(posts) {
        var container = $('#all-posts');
        container.empty();
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            var postHTML = '<div class="user-post">';
            postHTML += '<h2>' + post.title + '</h2>';
            postHTML += '<h3>' + post.body + '</h3>';
            postHTML += '<p class="reactions">Reactions: ' + post.reactions + '</p>';
            postHTML += '<p class="userid">User ID: ' + post.userId + '</p>';
            postHTML += '</div>';
            container.append(postHTML);
        }
    }

  
    function displayPagination() {
        var container = $('#pages');
        container.empty();
        var totalPages = Math.ceil(total / limit);
        for (var i = 1; i <= totalPages; i++) {
            var pageBtn = $('<button>').text(i);
            pageBtn.click(function() {
                
                skip = limit * (i - 1);
                getPosts();
            });
            container.append(pageBtn);
        }
    }

    $(document).ready(function() {
        getPosts();
    });

