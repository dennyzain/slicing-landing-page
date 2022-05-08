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

  const resTest = await fetch(`${baseUrl}/testimonial`);
  const resHelp = await fetch(`${baseUrl}/help-tips`);

  const dataTest = await resTest.json();
  const dataHelp = await resHelp.json();
  return {
    props: { data: [dataTest, dataHelp] },
  };
};
