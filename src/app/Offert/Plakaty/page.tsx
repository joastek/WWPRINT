import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import IMAGES from "@/components/Gallery/IMAGES";
import Image from "next/image";
import "@/styles/pages/Offert/Plakaty.scss";
const Poster = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="poster_position">
        <div className="poster_container">
          Jesteśmy sklepem, który oferuje usługę druku plakatów na zamówienie.
          Jeśli masz swoją ulubioną grafikę, którą chciałbyś zamienić w
          wyjątkowy plakat, jesteśmy gotowi pomóc! Oto jak działa nasza usługa:
          <ol>
            <li>
              {" "}
              Prześlij swoją grafikę: Wyślij nam plik graficzny z wybraną przez
              Ciebie grafiką. Może to być własnoręcznie stworzony projekt,
              ulubione zdjęcie, ilustracja lub dowolna inna grafika, którą
              chciałbyś zamienić w plakat. Akceptujemy pliki w formatach takich
              jak JPG, PNG, PDF itp.
            </li>
            <li>
              {" "}
              Wybierz preferowane parametry: Określ preferowane rozmiary i
              rodzaj papieru, na którym chciałbyś, aby został wydrukowany Twój
              plakat. Możemy dostosować się do różnych rozmiarów, takich jak A4,
              A3, A2, a nawet większych formatów. Oferujemy również różne
              rodzaje papieru, takie jak matowy, połyskujący, błyszczący lub
              płótno artystyczne, aby dopasować się do Twojego gustu.
            </li>{" "}
            <li>
              Wycena i płatność: Na podstawie przesłanej grafiki i wybranych
              parametrów przygotujemy dla Ciebie wycenę. Koszt będzie zależał od
              rozmiaru plakatu, rodzaju papieru i innych dodatkowych opcji. Po
              akceptacji wyceny będziesz mógł dokonać płatności.
            </li>
            <li>
              {" "}
              Druk i wysyłka: Po otrzymaniu płatności przystąpimy do druku
              Twojego plakatu. Nasz zespół zadba o najwyższą jakość druku, aby
              Twój plakat był wyjątkowy i estetyczny. Gdy plakat zostanie
              wydrukowany, zostanie starannie zapakowany i wysłany na wskazany
              adres.{" "}
            </li>
          </ol>
          Zapewniamy profesjonalną obsługę, wysoką jakość druku oraz szybką
          realizację zamówienia. Wykorzystaj naszą usługę, aby przekształcić
          swoje ulubione grafiki w oryginalne plakaty, które będą cieszyć oko i
          ozdobią Twoje wnętrze. Skontaktuj się z nami już dziś, aby rozpocząć
          proces zamówienia i stworzyć niepowtarzalny plakat z Twoją grafiką!
        </div>
        <div className="poster_image_position">
          <Image src={IMAGES.Poster.image1} alt="" className="poster_image" />
          <Image src={IMAGES.Poster.image2} alt="" className="poster_image" />
          <Image src={IMAGES.Poster.image3} alt="" className="poster_image" />
          <Image src={IMAGES.Poster.image4} alt="" className="poster_image" />
          <Image src={IMAGES.Poster.image5} alt="" className="poster_image" />
          <Image src={IMAGES.Poster.image6} alt="" className="poster_image" />
        </div>
      </div>
    </>
  );
};

export default Poster;
