import CardGame from "../CardGame";

function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("javascript", "logo do JavaScript")}
    </article>
  `;
}

export default CardFrontBack;
