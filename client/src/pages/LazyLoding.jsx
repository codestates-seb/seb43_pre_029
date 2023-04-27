import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
const MyPage = lazy(() => import('./MyPage'));
const QuestionInfo = lazy(() => import('./QuestionInfo'));
const Ask = lazy(() => import('./Ask'));

export { Home, Login, SignUp, MyPage, QuestionInfo, Ask };
