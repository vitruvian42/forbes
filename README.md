# Forbes
Demo Blog page for forbes site


Features Implemented 
1) Complete List page and Details page for a particular blog
2) Responsive structure (UI) for blogs
3) Visualize 4 blogs at a time on list page and add more as needed
4) Like feature for blogs
5) Similar articles on details page
6) State management using redux ans persistence of state using localStorage
7) Dev build enviornment using webpack
8) Code written in es6


Features not implemented
1) Filters for blogs
2) in very rare case if a new article is added whilke a user is liking a blog at the samme instant of his reload his localstorage will reset, this can be fixed when we store likes in database
3) prod setup for webpack (wasn't able to get time)



For dev env setup
1) Clone repo on local
2) Run npm i
3) run npm start
4) open localhost:8080 in browser