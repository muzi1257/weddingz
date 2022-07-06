import AllBlogsPage from './AllBlogsPage';
import AddBlogPage from './AddBlogPage';
import BlogDetailsPage from './BlogProfilePage';
export const BlogsPageConfig = {
  routes: [
    {
      path: '/blogs',
      exact: true,
      component: AllBlogsPage,
    },
    {
      path: '/blog/add-blog',
      exact: true,
      component: AddBlogPage,
    },
    {
      path: '/getSingleBlog/:id',
      exact: true,
      component: BlogDetailsPage,
    },
  ],
};
