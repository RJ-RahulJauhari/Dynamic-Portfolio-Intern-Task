import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = ({projects}) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links"
        >
          <a
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-ui-ux-design")}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
            data-href=".sorting-ui-ux-design"
          >
            UI UX Design
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
            Photography
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-development")}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Development
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-branding")}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Branding
          </a>
        </div>
        <div className="works-items works-list-items row">
          {
            projects.map((item,index) => {
              return (<div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo " key={index}>
              <div className="works-item">
                <Link href="/work-single">
                  <a>
                    <span
                      className="image"
                    >
                      <span className="img">
                        <img src={item.image.url} alt={item.title} />
                        <span className="overlay" />
                      </span>
                    </span>
                    <span className="desc">
                      <span
                        className="name"
                      >
                        {item.title}
                      </span>
                      <span
                        className="category"
                      >
                        {/* Branding
                        <br />
                        Photography */}
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>)
            })
          }
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
