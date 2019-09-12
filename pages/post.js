import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut unde ut maiores deleniti debitis rem. Saepe laborum perspiciatis sequi temporibus corrupti! Tempora id labore ea saepe ipsa cum esse eius!</p>
  </Layout>
);

export default withRouter(Post);