import Header from '@components/organisms/Header';
import Content from '@components/organisms/Content';
import Footer from '@components/organisms/Footer';

export default function Home({ data }) {
  return (
    <>
      <Header />
      <Content data={data} />
      <Footer />
    </>
  );
}
export const getStaticProps = async () => {
  const baseUrl = 'https://wknd-take-home-challenge-api.herokuapp.com';

  const response = await Promise.all([
    fetch(`${baseUrl}/testimonial`).then((res) => res.json()),
    fetch(`${baseUrl}/help-tips`).then((res) => res.json()),
  ]).then((res) => res);

  const data = response.map((item) => item);

  return {
    props: { data },
  };
};
