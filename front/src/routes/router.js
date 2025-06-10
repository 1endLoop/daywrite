import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";
import NotFound from "../pages/not_found/NotFound";
import Layout from "../pages/layout/Layout";

// Auth
import Login from "../pages/auth/Login";

// Category
import CategoryContainer from "../pages/category/CategoryContainer";
import TypingPage from "../pages/category/TypingPage";

// Archive
import ArchiveContainer from "../pages/archive/ArchiveContainer";
import HistoryList from "../pages/archive/HistoryList";
import CalendarHome from "../pages/archive/CalendarHome";
import CalendarList from "../pages/archive/CalendarList";
import BookmarkHome from "../pages/archive/BookmarkHome";
import BookmarkTypedList from "../pages/archive/BookmarkTypedList";
import BookmarkPlyedList from "../pages/archive/BookmarkPlyedList";
import LikedList from "../pages/archive/LikedList";

// Community
import CommunityContainer from "../pages/community/CommunityContainer";
import CommunityList from "../pages/community/CommunityList";
import CommunityHome from "../pages/community/CommunityHome";
import CommunityMyPosts from "../pages/community/CommunityMyPosts";
import CommunityCollection from "../pages/community/CommunityCollection";
import PostDetail from "../pages/community/PostDetail";
import PostWrite from "../pages/community/PostWrite";
import CollectionDetail from "../pages/community/CollectionDetail";

// My Page
import MyPageContainer from "../pages/my_page/MyPageContainer";
import ProfileHome from "../pages/my_page/ProfileHome";
import SharedPosts from "../pages/my_page/SharedPosts";
import Followers from "../pages/my_page/Followers";
import Following from "../pages/my_page/Following";
import TypingSetting from "../pages/my_page/TypingSetting";
import EditUserInfo from "../pages/my_page/EditUserInfo";
import CategoryData from "../pages/my_page/CategoryData";
import NoticeHome from "../pages/my_page/NoticeHome";
import NoticeWrite from "../pages/my_page/NoticeWrite";
import Faq from "../pages/my_page/Faq";
import InquiryHome from "../pages/my_page/InquiryHome";
import InquiryWrite from "../pages/my_page/InquiryWrite";
import Terms from "../pages/my_page/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // 메인
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "login",
        element: <Login />,
      },

      // 카테고리
      {
        path: "category",
        element: <CategoryContainer />,
      },
      {
        path: "category/typing",
        element: <TypingPage />,
      },

      // Archive
      {
        path: "archive",
        element: <ArchiveContainer />,
        children: [
          {
            index: true,
            element: <Navigate to ="history" replace />,
          },
          {
            path: "history",
            element: <HistoryList />,
          },
          {
            path: "calendar",
            element: <CalendarHome />,
          },
          {
            path: "calendar/:date",
            element: <CalendarList />,
          },
          {
            path: "bookmark",
            element: <BookmarkHome />,
          },
          {
            path: "bookmark/typed",
            element: <BookmarkTypedList />,
          },
          {
            path: "bookmark/played",
            element: <BookmarkPlyedList />,
          },
          {
            path: "liked",
            element: <LikedList />,
          },
        ],
      },
      // 커뮤니티
      {
        path: "community",
        element: <CommunityContainer />,
        children: [
          {
            index: true,
            element: <CommunityHome />,
          },
          {
            path: "list",
            element: <CommunityList />,
          },
          {
            path: "my",
            element: <CommunityMyPosts />,
          },
          {
            path: "collection",
            element: <CommunityCollection />,
          },
        ],
      },
      {
        path: "community/post/:id",
        element: <PostDetail />,
      },
      {
        path: "community/write",
        element: <PostWrite />,
      },
      {
        path: "collection/:id",
        element: <CollectionDetail />,
      },

      // 마이페이지
      {
        path: "mypage",
        element: <MyPageContainer />,
        children: [
          {
            index: true,
            element: <ProfileHome />,
          },
          {
            path: "shared",
            element: <SharedPosts />,
          },
          {
            path: "followers",
            element: <Followers />,
          },
          {
            path: "following",
            element: <Following />,
          },
          {
            path: "typing-setting",
            element: <TypingSetting />,
          },
          {
            path: "user-info",
            element: <EditUserInfo />,
          },
          {
            path: "data",
            element: <CategoryData />,
          },
          {
            path: "notice",
            element: <NoticeHome />,
          },
          {
            path: "notice/write",
            element: <NoticeWrite />,
          },
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "inquiry",
            element: <InquiryHome />,
          },
          {
            path: "inquiry/write",
            element: <InquiryWrite />,
          },
          {
            path: "terms",
            element: <Terms />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
