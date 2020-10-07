import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Grid from "@/Components/Grid";
import SpeakerCard from "@/Components/SpeakerCard";
import { SPEAKERS } from "@/dataset";
import Speaker from "@/Types/Speaker";

export default class Speakers extends React.Component {
  shuffleArray(arr: Speaker[]) {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  render() {
    return (
      <section id="speakers" className="speakers">
        {/* <Container size={Sizes.small}>
          <h1>Ponentes Principales</h1>
        </Container>
        <Container size={Sizes.small}>
          <Grid>
            {this.shuffleArray(SPEAKERS).map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </Grid>
        </Container> */}
        <Container size={Sizes.small}>
          <h1>Charlas</h1>
          <p>
            ¡El{" "}
            <a
              href="https://forms.gle/wbKkpmf9nibnNQZy6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call for Proposals
            </a>{" "}
            ya está abierto! Tienes hasta el{" "}
            <b>domingo 18 de octubre de 2020 a las 11:59 P.M.</b> para presentar
            tu propuesta de charla. Puedes presentar más de una propuesta, pero
            recuerda que cada charla solo puede durar <b>10 minutos</b>. Si
            nunca has presentado en un evento antes, mejor. ¡Esta es tu
            oportunidad!
          </p>
          <br />
          <p>
            Las charlas seleccionadas serán <b>pre-grabadas</b> y puestas a
            disposición de todos los participantes. Tendremos más detalles sobre
            esto próximamente.
          </p>
          <br />
          <p>
            Si la situación con la COVID-19 lo permite, planeamos hacer el
            Python Pizza presencial en Holguín el{" "}
            <b>sábado 14 de noviembre de 2020</b>.
          </p>
          <br />
          <p>
            Si tienes dudas o preguntas, puedes contactarnos en{" "}
            <a href="mailto:holguin@python.pizza">holguin@python.pizza</a>.
          </p>
          <br />
          <br />
          <p>¡Aquí tienes el video de bienvenida!</p>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hQvxtl_xKks"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </section>
    );
  }
}
