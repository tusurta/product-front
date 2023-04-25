import { Header } from "components/features/header";
import { PageWithHeader } from "components/ui/layout/PageWithHeader";

export const Home = () => {
  return (
    <PageWithHeader header={<Header />}>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://picsum.photos/1920/1080?blur=2")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-24 text-7xl font-bold">HOME</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </PageWithHeader>
  );
};

export default Home;
