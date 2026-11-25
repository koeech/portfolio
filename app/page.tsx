import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import * as S from "@/components/Sections";
export default function Page() {
  return (<>
    <Nav />
    <main id="main">
      <Hero />
      <S.About /><S.Skills /><S.Tools /><S.Projects /><S.Journey />
      <S.Certs /><S.Process /><S.Testimonials /><S.Insights /><S.Contact />
    </main>
    <S.Footer />
  </>);
}
