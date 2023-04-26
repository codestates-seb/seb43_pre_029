import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MyPage = lazy(() => import('./pages/MyPage'));
const QuestionInfo = lazy(() => import('./pages/QuestionInfo'));
const Ask = lazy(() => import('./pages/Ask'));

export { Home, Login, SignUp, MyPage, QuestionInfo, Ask };
