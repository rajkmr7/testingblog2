import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimelineCarousel = () => {
  const yeardata = [
    {
      year: 2019,
      content: [
        {
          heading: "Opdracht: audit manager a.i. bij BDO Audit & Assurance B.V.",
          title: "november 2019 - december 2019",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Jaarrekeningcontroles uitgevoerd bij gemeenten, gemeenschappelijke regelingen,
waterschappen, onderwijsinstellingen, stichtingen en MKB (productie en handel);`,
            `Het uitvoeren van een controle op grond van liquidatie grondslagen en schrijven van
een rapport van bevindingen i.v.m. een aardbevingsdossier;`,
             `Gesprekspartner bij de eindbesprekingen met de auditcommissie, het bestuur en/of`,
             `toezichthoudend orgaan (gemeenten en gemeenschappelijke regelingen);`,
             `Schrijven van managementletters en rapport van bevindingen;`,
             `Bewaking voortgang, aansturen en reviewen van de controleteams;`,
             `Presentatie geven i.v.m. de rechtmatigheidsverantwoording bij gemeenten;`,
          ],
        },
      ],
    },
    {
      year: 2020,
      content: [
        {
          heading: "Opdracht: audit manager a.i. bij BDO Audit & Assurance B.V.",
          title: "november 2020 - december 2020",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Jaarrekeningcontroles uitgevoerd bij gemeenten, zorginstellingen, culture stichtingen
en MKB (productie en handel);`,
            `Gesprekspartner bij de eindbesprekingen met de auditcommissie, het bestuur en/of`,
            `toezichthoudend orgaan (gemeenten en zorginstellingen);`,
            `Schrijven van managementletters en rapport van bevindingen;`,
            `Bewaking voortgang, aansturen en reviewen van de controleteams;`,
          ],
        },
        {
          heading: "Opdracht: financieel adviseur a.i. bij Gemeente Leeuwarden",
          title: "september 2020 - december 2020",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Inrichten van de bedrijfsprocessen grondexploitatie en huren & pachten;`,
            `Procesplaten opstellen en intern bespreken met de medewerkers;`,
            `Beschrijven van de processen in de verbijzonderde interne controleplan (VIC);`,
            `Ondersteunen bij de interne controles en bouwen van werkinstructies; gemeenten;`,
          ],
        },
        {
          heading: "Opdracht: audit manager a.i. bij BDO Audit & Assurance B.V.",
          title: "januari 2020 - juni 2020",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
          `Jaarrekeningcontroles uitgevoerd bij gemeenten, gemeenschappelijke regelingen,
waterschappen, onderwijs, stichtingen en MKB (productie en handel);`,
          `Het uitvoeren van een controle op grond van liquidatie grondslagen en schrijven van 
een rapport van bevindingen i.v.m. een aardbevingsdossier;`,
`Gesprekspartner bij de eindbesprekingen met de auditcommissie, het bestuur en/of
toezichthoudend orgaan (gemeenten en gemeenschappelijke regelingen);`,
`Schrijven van managementletters en rapport van bevindingen;`,
`Bewaking voortgang, aansturen en reviewen van de controleteams;`,
`Presentatie geven i.v.m. de rechtmatigheidsverantwoording bij gemeenten;`,
          ],
        },
      ],
    },
    {
      year: 2021,
      content: [
        {
          heading: "Opdracht: financieel adviseur / controller a.i. bij Samenwerkingsorganisatie De Wolden Hoogeveen ",
          title: "september 2021 - december 2021",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
          `Financieel adviseur Bedrijfsbureau Fysieke Leefomgeving;`,
          `Controller grondexploitaties gemeente De Wolden;`,
          `Programmacontroller duurzaamheid gemeenten De Wolden en Hoogeveen;`,
          `Maandrapportages opstellen en toelichten aan de wethouders en
programmaregisseurs van de gemeenten De Wolden en Hoogeveen;`,
          `Subsidieprojecten m.b.t. duurzaamheid monitoren en financiële verantwoordingen
opstellen;`,
          `Collegevoorstellen van beleidsadviseurs beoordelen op het financieel aspect en van
advies voorzien;`,
          ],
        },
        {
          heading: "Opdracht: audit manager a.i. bij BDO Audit & Assurance B.V.",
          title: "januari 2021 - juni 2021",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Jaarrekeningcontroles uitgevoerd bij gemeenten, zorginstellingen, culture stichtingen
en MKB (productie en handel);`,
            `Gesprekspartner bij de eindbesprekingen met de auditcommissie, het bestuur en/of
toezichthoudend orgaan (gemeenten en zorginstellingen);`,
            `Schrijven van managementletters en rapport van bevindingen;`,
            `Bewaking voortgang, aansturen en reviewen van de controleteams;`,
          ],
        },        
      ],
    },
    {
      year: 2022,
      content: [
        {
          heading: "Opdracht: senior adviseur procesbeheer a.i. bij het IMG",
          title: "oktober 2022 - december 2022",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Processenhuis en proces van onderhoud ontwikkelen;`,
            `Aanbevelingen rapporteren aan de teammanager;`,
            `Voortgang bewaken en toelichten aan de teammanager en het team procesbeheer;`,
            `Eindproduct presenteren en toelichten aan diverse teams binnen de afdeling
bedrijfsvoering;`,
          ],
        },
        {
          heading: "Opdracht: business controller a.i. bij Unigarant Verzekeringen N.V. ",
          title: "september 2022 - december 2022",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Het vernieuwen en verbeteren van het Financieel Control Framework;`,
            `Het in kaart brengen en beschrijven van de bestaande beheersingsmaatregelen;`,
            `het identificeren van mogelijke risicogebieden binnen de processen;`,
            `Wekelijks bespreken van de voortgang en toelichting geven op de bevindingen intern
als ook de contactpersoon van de moedermaatschappij;`,
          ],
        },
        {
          heading: "Opdracht: audit manager a.i. bij Deloitte Accountants B.V.",
          title: "februari 2022 - juli 2022",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Jaarrekeningcontroles uitgevoerd bij gemeenten, provincies, onderwijsinstellingen,
woningcorporaties en MKB (productiehandel);`,
            `Schrijven van managementletters en rapport van bevindingen;`,
            `Bewaking voortgang, aansturen en reviewen van de controleteams;`,
            `Aanspreekpunt voor de klanten ten tijde van de opdracht periode;`, 
          ],
        },
        {
          heading: "Opdracht: financieel adviseur / controller a.i. bij Samenwerkingsorganisatie De Wolden Hoogeveen",
          title: "januari  2022",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Financieel adviseur Bedrijfsbureau Fysieke Leefomgeving;`,
            `Controller grondexploitaties gemeente De Wolden;`,
            `Programmacontroller duurzaamheid gemeenten De Wolden en Hoogeveen;`,
            `Maandrapportages opstellen en toelichten aan de wethouders en
             programmaregisseurs van de gemeenten De Wolden en Hoogeveen;`,
             `Subsidieprojecten m.b.t. duurzaamheid monitoren en financiële verantwoordingen
opstellen;`,
             `Collegevoorstellen van beleidsadviseurs beoordelen op het financieel aspect en van
advies voorzien;`,
          ],
        },
        
      ],
    },
    {
      year: 2023,
      content: [
        {
          heading: "Opdracht: projectconsultant a.i. bij dr. Aletta Jacobs College",
          title: "november 2023 - december 2023",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Projectenadministratie voor de subsidiestromen inrichten;`,
            `Ondersteunen bij het opzetten van een projectbegrotings- en realisatietool
Adviseren op het gebied van financiële processen en de optimalisatie daarvan;`,
            `De huisaccountant van reactie voorzien op de bevindingen vanuit de
managementletter;`,
             `Adviseren en meedenken op het gebied van het inkoopbeleid;`,
             `De tools intern bespreken en toelichten aan de directeur bedrijfsvoering,
medewerker financiën en de projectleiders om deze zorgvuldig over te kunnen dragen;`,

            
          ],
        },
        {
          heading: "Opdracht: senior adviseur IC en procesbeheer a.i. bij het IMG",
          title: "september 2023 - december 2023",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Processenhuis en proces van onderhoud verder beheren en intern bespreken;`,
            `Plan van aanpak schrijven m.b.t. Pilot Risicomanagement en intern bespreken;`,
            `Risicoparagraaf schrijven ten behoeve van de tertaalrapportages;`,
            `Interne audits uitvoeren op de regelingen binnen het IMG;`,
            `Rapportages formats opstellen ten behoeve van de directie en intern toelichten;`,
            `Risicoanalyse en jaarplan IC 2024 intern bespreken en vorm geven;`,
            
          ],
        },
        {
          heading: "Opdracht: audit manager a.i. bij Deloitte Accountants B.V.",
          title: "januari 2023 - juli 2023",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Jaarrekeningcontroles uitgevoerd bij gemeenten, provincies, onderwijsinstellingen
en woningcorporaties;`,
             `Schrijven van managementletters en rapport van bevindingen;`,
             `Bewaking voortgang, aansturen en reviewen van de controleteams;`,
             `Aanspreekpunt voor de klanten ten tijde van de opdracht periode;`,

          ],
        },
        {
          heading: "Opdracht: senior adviseur procesbeheer a.i. bij het IMG",
          title: "januari 2023",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Processenhuis en proces van onderhoud ontwikkelen;`,
            `Aanbevelingen rapporteren aan de teammanager;`,
            `Voortgang bewaken en toelichten aan de teammanager en het team procesbeheer;`,

          ],
        },
      ],
    },
    {
      year: 2024,
      content: [
        {
          heading: "Opdracht: senior adviseur interne controle en procesbeheer a.i. bij het IMG",
          title: "januari 2024 - heden",
          extraline: "De volgende belangrijkste werkzaamheden uitgevoerd:",
          content: [
            `Processenhuis en proces van onderhoud verder beheren en intern bespreken;`,
            `Plan van aanpak schrijven m.b.t. Pilot Risicomanagement en intern bespreken;`,
            `Risicoparagraaf schrijven ten behoeve van de tertaalrapportages;`,
            `Interne audits uitvoeren op de regelingen binnen het IMG;`,
            `Rapportages formats opstellen ten behoeve van de directie en intern toelichten;`,
            `Risicoanalyse en jaarplan IC 2024 intern bespreken en vorm geven;`,
          ],
        },
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(yeardata.length - 2);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    // After the component is mounted, set the last slide as active
    if (sliderRef) {
      sliderRef.slickGoTo(activeIndex);
    }
  }, [sliderRef, activeIndex]);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
    sliderRef.slickGoTo(index);
  };

  //   const years = Array.from({ length: 23 }, (_, index) => 2000 + index);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: yeardata.length > 7 ? 7 : yeardata.length > 5 ? 5 : 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    touchMove: true,
  };

  const getClassName = (index) => {
    if (index === activeIndex) {
      return "active-slide";
    } else if (index - 1 === activeIndex || index + 1 === activeIndex) {
      return "adjacent";
    } else {
      return "inactive";
    }
  };

  return (
    <div className="timeline-carousel">
      <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
        {yeardata.map((year, index) => (
          <div className="timeline-slide1" key={index}>
            <div className="slide-border"></div>
            <div
              className={`year ${getClassName(index)}`}
              onClick={() => handleSlideClick(index)}
            >
              <span
                className={`text-year ${
                  (activeIndex + 1 === index ||
                    activeIndex === index ||
                    activeIndex - 1 === index) &&
                  "active-year"
                }`}
              >
                {year.year}
              </span>
            </div>
            <div className="slide-border"></div>
          </div>
        ))}
      </Slider>

      <div className="container mt-4">
        <div className="row portfolio-gallery">
          <div
            className="p-4  mb-5"
            style={{
              borderRadius: "35px",
              border: "3px solid #65A8DC",
              width: "100%",
              
            }}
          >
            {yeardata[activeIndex].content.map((item) => (
              <div key={item.heading} className="mb-3">
                <h5 className="mb-0" style={{ fontWeight: "500" }}>
                  {item.title}
                </h5>
                <h4>{item.heading}</h4>
                <p style={{ marginBottom: 0 }}>{item.extraline}</p>
                <ul>
                  {item.content.map((item1, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: 0, whiteSpace: "pre-wrap" }}
                    >
                      {item1}
                    </li>
                  ))}
                </ul>
                {/* <p>{item.content}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default TimelineCarousel;
