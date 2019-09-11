import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>A Javascript Programmer</p>
    <img src="/static/javascript-logo.png" alt="Javascipt" height="200px"/>
  </Layout>
);

export default About;