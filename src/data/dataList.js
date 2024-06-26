const dataList = [
    {"id": 7346, "name": "Tucano", "object": "Company", "image": '', "description": "Caféaua este prea scumpă"},
    {"id": 7347, "name": "Steve Jobs", "object": "Person", "image": '', "description": "Co-fondatorul Apple Inc."},
    {"id": 7348, "name": "Google", "object": "Company", "image": '', "description": "Company de tehnologie de vârf."},
    {"id": 7349, "name": "Elon Musk", "object": "Person", "image": '', "description": "CEO al Tesla și SpaceX."},
    {"id": 7350, "name": "Amazon", "object": "Company", "image": '', "description": "Cel mai mare retailer online din lume."},
    {"id": 7351, "name": "Albert Einstein", "object": "Person", "image": '', "description": "Fizician teoretician."},
    {"id": 7352, "name": "Microsoft", "object": "Company", "image": '', "description": "Company globală de tehnologie."},
    {"id": 7353, "name": "Coco Chanel", "object": "Person", "image": 'https://www.agneseangelini.com/wp-content/uploads/2019/04/coco.jpg', "description": "Designer de modă iconic."},
    {"id": 7354, "name": "Samsung", "object": "Company", "image": '', "description": "Conglomerat multinațional."},
    {"id": 7355, "name": "Mark Zuckerberg", "object": "Person", "image": '', "description": "Co-fondatorul Facebook."},
    {"id": 7356, "name": "Toyota", "object": "Company", "image": '', "description": "Producător de automobile."},
    {"id": 7357, "name": "Marie Curie", "object": "Person", "image": '', "description": "Fizician și chimist laureat cu Premiul Nobel."},
    {"id": 7358, "name": "Coca-Cola", "object": "Company", "image": 'https://www.coca-cola.com/content/dam/onexp/md/ro/home-images/brands/coca-cola/mdl_coca_cola_logo_500x180.png/width1960.png', "description": "Company de băuturi."},
    {"id": 7359, "name": "Bill Gates", "object": "Person", "image": '', "description": "Co-fondatorul Microsoft."},
    {"id": 7360, "name": "Tesla", "object": "Company", "image": '', "description": "Company de vehicule electrice și energie curată."},
    {"id": 7361, "name": "Oprah Winfrey", "object": "Person", "image": '', "description": "Mogul media și gazdă de talk-show."},
    {"id": 7362, "name": "Nike", "object": "Company", "image": '', "description": "Company de îmbrăcăminte sportivă și atletică."},
    {"id": 7363, "name": "Stephen Hawking", "object": "Person", "image": '', "description": "Fizician teoretician și cosmolog."},
    {"id": 7364, "name": "IBM", "object": "Company", "image": '', "description": "Company de tehnologie informațională."},
    {"id": 7365, "name": "Ada Lovelace", "object": "Person", "image": '', "description": "Prima programatoare de computer din lume."},
    {"id": 7366, "name": "PepsiCo", "object": "Company", "image": '', "description": "Company de alimente și băuturi."},
    {"id": 7367, "name": "Vincent van Gogh", "object": "Person", "image": '', "description": "Pictor postimpresionist."},
    {"id": 7368, "name": "Sony", "object": "Company", "image": '', "description": "Conglomerat multinațional."},
    {"id": 7369, "name": "J.K. Rowling", "object": "Person", "image": '', "description": "Autoarea seriei Harry Potter."},
    {"id": 7370, "name": "Ford", "object": "Company", "image": '', "description": "Company auto."},
    {"id": 7371, "name": "Charles Darwin", "object": "Person", "image": '', "description": "Naturalist și biolog."},
    {"id": 7372, "name": "Adobe", "object": "Company", "image": '', "description": "Company de software."},
    {"id": 7373, "name": "Maya Angelou", "object": "Person", "image": '', "description": "Poetă și activistă pentru drepturile civile."},
    {"id": 7374, "name": "Burger King", "object": "Company", "image": '', "description": "Lanț de restaurante fast-food."},
    {"id": 7375, "name": "Nikola Tesla", "object": "Person", "image": '', "description": "Inventator și inginer."},
    {"id": 7376, "name": "General Electric", "object": "Company", "image": '', "description": "Conglomerat multinațional."},
    {"id": 7377, "name": "Malala Yousafzai", "object": "Person", "image": '', "description": "Laureată a Premiului Nobel pentru pace."},
    {"id": 7378, "name": "Netflix", "object": "Company", "image": '', "description": "Furnizor de servicii de streaming."},
    {"id": 7379, "name": "Isaac Newton", "object": "Person", "image": '', "description": "Fizician și matematician."},
    {"id": 7380, "name": "Adidas", "object": "Company", "image": '', "description": "Company de îmbrăcăminte sportivă."},
    {"id": 7381, "name": "Leo Messi", "object": "Person", "image": '', "description": "Fotbalist celebru."},
    {"id": 7382, "name": "NASA", "object": "Company", "image": '', "description": "Agenția Spațială Americană."},
    {"id": 7383, "name": "Cleopatra", "object": "Person", "image": '', "description": "Regina Egiptului Antic."},
    {"id": 7384, "name": "Disney", "object": "Company", "image": '', "description": "Company de divertisment."},
    {"id": 7385, "name": "Winston Churchill", "object": "Person", "image": '', "description": "Fost prim-ministru al Marii Britanii."},
    {"id": 7386, "name": "Tesla Roadster", "object": "Company", "image": '', "description": "Model de mașină electrică."},
    {"id": 7387, "name": "Martha Stewart", "object": "Person", "image": '', "description": "Omul de afaceri și personalitatea media."},
    {"id": 7388, "name": "Samsung Galaxy", "object": "Company", "image": '', "description": "Linie de smartphone-uri."},
    {"id": 7389, "name": "Amelia Earhart", "object": "Person", "image": '', "description": "Pionieră în domeniul aviației."},
    {"id": 7390, "name": "Harley-Davidson", "object": "Company", "image": '', "description": "Producător de motociclete."},
    {"id": 7391, "name": "Nelson Mandela", "object": "Person", "image": '', "description": "Fost președinte al Africii de Sud."},
    {"id": 7392, "name": "NASA Rover", "object": "Company", "image": '', "description": "Vehicul robotic pentru explorare spațială."},
    {"id": 7393, "name": "Vin Diesel", "object": "Person", "image": '', "description": "Actor și producător."},
    {"id": 7394, "name": "Nintendo", "object": "Company", "image": '', "description": "Company de jocuri video."},
    {"id": 7395, "name": "Jane Goodall", "object": "Person", "image": '', "description": "Primatolog și etolog."},
    {"id": 7396, "name": "Sony PlayStation", "object": "Company", "image": '', "description": "Consolă de jocuri video."},
    {"id": 7397, "name": "George Orwell", "object": "Person", "image": '', "description": "Autor al romanului 1984."},
    {"id": 7398, "name": "Adobe Photoshop", "object": "Company", "image": '', "description": "Software de editare foto."},
    {"id": 7399, "name": "Audrey Hepburn", "object": "Person", "image": '', "description": "Actriță și umanitară."},
    {"id": 7400, "name": "Twitter", "object": "Company", "image": '', "description": "Platformă de social media."},
    {"id": 7401, "name": "Michael Jordan", "object": "Person", "image": '', "description": "Legendarul jucător de baschet care a reusit sa fac si bani din asta, ajutat de Nike."},
    {"id": 7402, "name": "Porsche", "object": "Company", "image": '', "description": "Producător de mașini sport."},
    {"id": 7403, "name": "Mother Teresa", "object": "Person", "image": '', "description": "Misionară și nobilă albaneză-indiană."},
    {"id": 7404, "name": "Netflix", "object": "Company", "image": '', "description": "Platformă de streaming video."},
    {"id": 7405, "name": "Vincent van Gogh", "object": "Person", "image": '', "description": "Pictor postimpresionist olandez."},
    {"id": 7406, "name": "IBM", "object": "Company", "image": '', "description": "Parintele calculatoarel."},
    {"id": 7407, "name": "Albert Einstein", "object": "Person", "image": '', "description": "Fizician teoretician german."},
    {"id": 7408, "name": "Tesla, Inc.", "object": "Company", "image": '', "description": "Producător de automobile electrice."},
    {"id": 7409, "name": "Malala Yousafzai", "object": "Person", "image": '', "description": "O cunosc personal, o femeie foarte desteapta."},
    {"id": 7410, "name": "Microsoft", "object": "Company", "image": '', "description": "Windows phone era tare, pacat ca a disparut."},
    {"id": 7411, "name": "Marie Curie", "object": "Person", "image": '', "description": "Fiziciană și chimistă poloneză-franceză."},
    {"id": 7412, "name": "Facebook", "object": "Company", "image": '', "description": "Rețea de socializare online."},
    {"id": 7413, "name": "Walt Disney", "object": "Person", "image": '', "description": "Fondator al Companyi Disney."},
    {"id": 7414, "name": "Amazon", "object": "Company", "image": '', "description": "Zic multi ca a si falimentat firme."},
    {"id": 7415, "name": "Jane Austen", "object": "Person", "image": '', "description": "Romancieră engleză."},
    {"id": 7416, "name": "Coca-Cola", "object": "Company", "image": 'https://www.coca-cola.com/content/dam/onexp/kz/ru/brand-coca-cola/coca-cola-zero-sugar_product_image-desktop.jpg', "description": "Cu coniac merge bine"},
    {"id": 7417, "name": "Leonardo da Vinci", "object": "Person", "image": '', "description": "A fost un geniu desavarsit."},
    {"id": 7418, "name": "Samsung", "object": "Company", "image": '', "description": "Conglomerat sud-coreean de tehnologie."},
    {"id": 7419, "name": "Oprah Winfrey", "object": "Person", "image": '', "description": "Prezentatoare TV și filantroapă."},
    {"id": 7420, "name": "Google", "object": "Company", "image": '', "description": "Motor de căutare și tehnologie online."},{"id": 7421, "name": "Michael Jordan", "object": "Person", "image": '', "description": "Legendarul jucător de baschet."},
    {"id": 7422, "name": "Porsche", "object": "Company", "image": '', "description": "Producător de mașini sport."},
    {"id": 7423, "name": "Mother Teresa", "object": "Person", "image": '', "description": "Misionară și nobilă albaneză-indiană."},
    {"id": 7424, "name": "Netflix", "object": "Company", "image": '', "description": "Platformă de streaming video."},
    {"id": 7425, "name": "Vincent van Gogh", "object": "Person", "image": '', "description": "Pictor postimpresionist olandez."},
    {"id": 7426, "name": "IBM", "object": "Company", "image": '', "description": "Company de tehnologie și servicii IT."},
    {"id": 7427, "name": "Albert Einstein", "object": "Person", "image": '', "description": "Cel mai renumit fizician al timpurilor."},
    {"id": 7428, "name": "Tesla, Inc.", "object": "Company", "image": '', "description": "Producător de automobile electrice."},
    {"id": 7429, "name": "Malala Yousafzai", "object": "Person", "image": '', "description": "Are toate sansele de a cstiga premiul nobel"},
    {"id": 7430, "name": "Microsoft", "object": "Company", "image": '', "description": "Cel mai bun instrument de apel ( Teams )."},
    {"id": 7431, "name": "Marie Curie", "object": "Person", "image": '', "description": "Fiziciană și chimistă poloneză-franceză."},
    {"id": 7432, "name": "Facebook", "object": "Company", "image": '', "description": "Rețea de socializare online."},
    {"id": 7433, "name": "Walt Disney", "object": "Person", "image": '', "description": "Fondator al Companyi Disney."},
    {"id": 7434, "name": "Amazon", "object": "Company", "image": '', "description": "Gigantul comerțului electronic."},
    {"id": 7435, "name": "Jane Austen", "object": "Person", "image": '', "description": "Romancieră engleză."},
    {"id": 7436, "name": "Coca-Cola", "object": "Company", "image": 'https://www.coca-cola.com/content/dam/onexp/kz/ru/brand-coca-cola/coca-cola-zero-sugar_product_image-desktop.jpg', "description": "Băutură răcoritoare iconică."},
    {"id": 7437, "name": "Leonardo da Vinci", "object": "Person", "image": '', "description": "Geniul renascentist italian."},
    {"id": 7438, "name": "Samsung", "object": "Company", "image": '', "description": "Conglomerat sud-coreean de tehnologie."},
    {"id": 7439, "name": "Oprah Winfrey", "object": "Person", "image": '', "description": "Prezentatoare TV și filantroapă."},
    {"id": 7440, "name": "Google", "object": "Company", "image": '', "description": "Motor de căutare și tehnologie online."},
    {"id": 7441, "name": "Jeff Bezos", "object": "Persoană", "image": '', "description": "Fondator al Amazon."},
    {"id": 7442, "name": "Tesla, Inc.", "object": "Company", "image": '', "description": "Producător de automobile electrice."},
    {"id": 7443, "name": "Stephen Hawking", "object": "Persoană", "image": '', "description": "Fizician teoretician britanic."},
    {"id": 7444, "name": "Netflix", "object": "Company", "image": '', "description": "Platformă de streaming video."},
    {"id": 7445, "name": "Ada Lovelace", "object": "Persoană", "image": '', "description": "Prima programatoare din lume."},
    {"id": 7446, "name": "IBM", "object": "Company", "image": '', "description": "Company de tehnologie și servicii IT."},
    {"id": 7447, "name": "Nikola Tesla", "object": "Persoană", "image": '', "description": "Inventator și inginer electric."},
    {"id": 7448, "name": "Microsoft", "object": "Company", "image": '', "description": "Gigantul software și hardware."},
    {"id": 7449, "name": "Malala Yousafzai", "object": "Persoană", "image": '', "description": "Activistă pentru drepturile femeilor și ale copiilor din Pakistan."},
    {"id": 7450, "name": "Apple", "object": "Company", "image": '', "description": "Producător de dispozitive electronice."},
    {"id": 7451, "name": "Curiosity", "object": "Company", "image": '', "description": "Roverul spațial al NASA pe Marte."},
    {"id": 7452, "name": "Mark Zuckerberg", "object": "Persoană", "image": '', "description": "Fondator al Facebook."},
    {"id": 7453, "name": "SpaceX", "object": "Company", "image": '', "description": "Company de transport spațial."},
    {"id": 7454, "name": "Jane Austen", "object": "Persoană", "image": '', "description": "Romancieră engleză."},
    {"id": 7455, "name": "Coca-Cola", "object": "Company", "image": '', "description": "Doarte buna ."},
    {"id": 7456, "name": "Marie Curie", "object": "Persoană", "image": '', "description": "Fiziciană și chimistă poloneză-franceză."},
    {"id": 7457, "name": "Samsung", "object": "Company", "image": '', "description": "Conglomerat sud-coreean de tehnologie."},
    {"id": 7458, "name": "Oprah Winfrey", "object": "Persoană", "image": '', "description": "Prezentatoare TV și filantroapă."},
    {"id": 7459, "name": "Google", "object": "Company", "image": '', "description": "Motor de căutare și tehnologie online."},
    {"id": 7460, "name": "Bill Gates", "object": "Persoană", "image": '', "description": "Fondator al Microsoft."},
    {"id": 7461, "name": "Elon Musk", "object": "Person", "image": '', "description": "Entrepreneur and CEO of SpaceX and Tesla."},
    {"id": 7462, "name": "Google", "object": "Company", "image": '', "description": "Multinational technology company."},
    {"id": 7463, "name": "Marie Curie", "object": "Person", "image": '', "description": "Physicist and chemist, known for her pioneering research on radioactivity."},
    {"id": 7464, "name": "Amazon", "object": "Company", "image": '', "description": "E-commerce and cloud computing company."},
    {"id": 7465, "name": "Albert Einstein", "object": "Person", "image": '', "description": "Theoretical physicist, developer of the theory of relativity."},
    {"id": 7466, "name": "Microsoft", "object": "Company", "image": '', "description": "Technology company, founded by Bill Gates."},
    {"id": 7467, "name": "Coco Chanel", "object": "Person", "image": 'https://www.agneseangelini.com/wp-content/uploads/2019/04/coco.jpg', "description": "Fashion designer and businesswoman."},
    {"id": 7468, "name": "Samsung", "object": "Company", "image": '', "description": "Multinational conglomerate."},
    {"id": 7469, "name": "Leonardo da Vinci", "object": "Person", "image": '', "description": "Polymath of the Renaissance, known for his art and inventions."},
    {"id": 7470, "name": "IBM", "object": "Company", "image": '', "description": "International Business Machines Corporation."},
    {"id": 7471, "name": "Oprah Winfrey", "object": "Person", "image": '', "description": "Media executive, actress, and philanthropist."},
    {"id": 7472, "name": "Tesla", "object": "Company", "image": '', "description": "Electric vehicle and clean energy company."},
    {"id": 7473, "name": "Vincent van Gogh", "object": "Person", "image": '', "description": "Post-Impressionist painter."},
    {"id": 7474, "name": "Facebook", "object": "Company", "image": '', "description": "Social media platform."},
    {"id": 7475, "name": "Marilyn Monroe", "object": "Person", "image": '', "description": "Iconic American actress and model."},
    {"id": 7476, "name": "HP", "object": "Company", "image": '', "description": "Hewlett-Packard, information technology company."},
    {"id": 7477, "name": "Stephen Hawking", "object": "Person", "image": '', "description": "Theoretical physicist and cosmologist."},
    {"id": 7478, "name": "Netflix", "object": "Company", "image": '', "description": "Streaming service for movies and TV shows."},
    {"id": 7479, "name": "Cleopatra", "object": "Person", "image": '', "description": "Last active ruler of the Ptolemaic Kingdom of Egypt."},
    {"id": 7480, "name": "Adobe", "object": "Company", "image": '', "description": "Software company known for Adobe Creative Cloud."},
    {"id": 7481, "name": "Bruce Lee", "object": "Person", "image": '', "description": "Martial artist, actor, and filmmaker."},
    {"id": 7482, "name": "Twitter", "object": "Company", "image": '', "description": "Social media platform for microblogging."},
    {"id": 7483, "name": "Beethoven", "object": "Person", "image": '', "description": "Composer and pianist from the Romantic era."},
    {"id": 7484, "name": "Tesla", "object": "Company", "image": '', "description": "American electric car and clean energy company."},
    {"id": 7485, "name": "Jane Austen", "object": "Person", "image": '', "description": "Novelist known for her romantic fiction."},
    {"id": 7486, "name": "NASA", "object": "Company", "image": '', "description": "National Aeronautics and Space Administration."},
    {"id": 7487, "name": "Charlie Chaplin", "object": "Person", "image": '', "description": "Iconic silent film actor and director."},
    {"id": 7488, "name": "Sony", "object": "Company", "image": '', "description": "Japanese multinational conglomerate."},
    {"id": 7489, "name": "Malala Yousafzai", "object": "Person", "image": '', "description": "Activist for female education and Nobel Prize laureate."},
    {"id": 7490, "name": "Porsche", "object": "Company", "image": '', "description": "German sports car manufacturer."},
    {"id": 7491, "name": "Vincent Price", "object": "Person", "image": '', "description": "Actor known for his roles in horror films."},
    {"id": 7492, "name": "Nike", "object": "Company", "image": '', "description": "Multinational corporation known for sports apparel and footwear."},
    {"id": 7493, "name": "Emily Dickinson", "object": "Person", "image": '', "description": "Renowned American poet."},
    {"id": 7494, "name": "Vogue", "object": "Company", "image": '', "description": "Fashion and lifestyle magazine."},
    {"id": 7495, "name": "Jim Carrey", "object": "Person", "image": '', "description": "Canadian-American actor and comedian."},
    {"id": 7496, "name": "Samsung", "object": "Company", "image": '', "description": "South Korean multinational conglomerate."},
    {"id": 7497, "name": "Virginia Woolf", "object": "Person", "image": '', "description": "English writer and modernist."},
    {"id": 7498, "name": "Adobe", "object": "Company", "image": '', "description": "Software company known for Adobe Creative Cloud."},
    {"id": 7499, "name": "Beyoncé", "object": "Person", "image": '', "description": "Singer, songwriter, and actress."},
    {"id": 7500, "name": "Amazon", "object": "Company", "image": '', "description": "E-commerce and cloud computing company."},  
  ];

export default dataList;