const dishes = [
  {
    name: 'Krem z dyni',
    description:
      'Pyszna, lekko pikantna i aromatyczna zupa dyniowa z masłem orzechowym. Pożywna i rozgrzewająca!',
    image:
      'https://cdn.pixabay.com/photo/2017/11/23/13/50/pumpkin-soup-2972858_960_720.jpg',
    ingredients:
      'Dynia, Oliwa, Cebula, Czosnek, Imbir, Pasta Curry, Mleko Kokosowe',
    price: 12,
    type: 'soup',
  },
  {
    name: 'Ziemniaczana',
    description:
      'Zupa ziemniaczana to pyszna i sycąca propozycja na jesienny lub zimowy obiad. Można ją ugotować w wersji z mięsem lub bez mięsa. Uwielbiają i dzieci i dorośli.',
    image:
      'https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_960_720.jpg',
    ingredients: 'Ziemniaki, cebula, marchewki, pietruszka, śmietana',
    price: 11,
    type: 'soup',
  },
  {
    name: 'Pomidorowa',
    description:
      'Domowa zupa pomidorowa przywołuje najpiękniejsze wspomnienia z dzieciństwa. Szybko się ją przygotowuje i jeszcze szybciej znika ze stołu.',
    image:
      'https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793_960_720.jpg',
    ingredients: 'Kurczak, Marchew, Pietruszka, Por, Seler, Śmietana',
    price: 15,
    type: 'soup',
  },
  {
    name: 'Canape',
    description:
      'Canape to rodzaj przystawki, małego, przygotowanego i często dekoracyjnego jedzenia, składającego się z małego kawałka chleba, ciasta francuskiego lub krakersa z dodatkiem pikantnego jedzenia.',
    image:
      'https://cdn.pixabay.com/photo/2010/12/13/10/25/canape-2802_960_720.jpg',
    ingredients:
      'Chrupiący Chleb, Ciasto Francuskie, Krakersy, Łosoś, Chorizo, Twaróg',
    price: 10,
    type: 'appetizer',
  },
  {
    name: 'Bruschetta',
    description:
      'Typowa włoska przystawka, składająca się z grzanki posmarowanej czosnkiem i oliwą. W wersji klasycznej podawana jest z pomidorami pokrojonymi w kostkę i bazylią lub cebulką.',
    image:
      'https://cdn.pixabay.com/photo/2020/10/30/18/35/bruschetta-5699486_960_720.jpg',
    ingredients: 'Bułka Paryska, Oliwa, Czosnek, Pomidory, Bazylia',
    price: 12,
    type: 'appetizer',
  },
  {
    name: 'Frytki',
    description:
      'pokrojone w kształt słupków i smażone w głębokim tłuszczu ziemniaki.',
    image:
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg',
    ingredients: 'Ziemniaki, Sól, Sos',
    price: 8,
    type: 'appetizer',
  },
  {
    name: 'Sauerbraten',
    description:
      'Sauerbraten to tradycyjna niemiecka pieczeń z mocno marynowanego mięsa. Jest uważany za danie narodowe Niemiec.',
    image:
      'https://cdn.pixabay.com/photo/2017/07/17/13/50/sauerbraten-2512441_960_720.jpg',
    ingredients:
      'Karkówka Wołowa, Marchew, Seler, Cebula, Czosnek, Kluski Śląskie',
    price: 34,
    type: 'mainCourse',
  },
  {
    name: 'Makaron z Krewetkami',
    description:
      'Makaron z krewetkami to przepyszne danie w stylu włoskim z dodatkiem świeżych krewetek.',
    image:
      'https://cdn.pixabay.com/photo/2017/02/10/08/38/pasta-2054656_960_720.jpg',
    ingredients: 'Krewetki, Pietruszka, Makaron, Masło, Oliwa',
    price: 28,
    type: 'mainCourse',
  },
  {
    name: 'Filet z Sandacza',
    description:
      'Sandacz to przepyszna ryba, która przede wszystkim powinna znaleźć się na talerzach tych, którzy dbają o linię. Jest delikatna, lekko maślana, a także dostarcza dużo białka oraz kwasów omega-3.',
    image:
      'https://cdn.pixabay.com/photo/2017/10/09/17/42/zander-filet-2834209_960_720.jpg',
    ingredients: 'Sandacz, Oliwa, Sok z Cytryny, Masło, Czosnek',
    price: 25,
    type: 'mainCourse',
  },
  {
    name: 'Makaron z Pesto',
    description:
      'Soczyście zielona bazylia zniewala nie tylko zapachem, ale i smakiem. Aromat pesto pozwoli Ci skosztować odrobiny lata, kiedy tylko zechcesz.',
    image:
      'https://cdn.pixabay.com/photo/2016/11/23/18/31/close-up-1854245_960_720.jpg',
    ingredients: 'Makaron, Bazylia, Czosnek, Oliwa, Pesto, Parmezan',
    price: 27,
    type: 'mainCourse',
  },
  {
    name: 'Sałatka ze Świeżych Warzyw',
    description:
      'Sałatka z sezonowych warzyw. Pyszne i świeże warzywa skropione sokiem z cytryny zadziałają orzeźwiająco.',
    image:
      'https://cdn.pixabay.com/photo/2017/02/08/17/22/salad-2049563_960_720.jpg',
    ingredients:
      'Ogórek, Rzodkiewka, Sałata, Por, Papryka Czerwona, Sok z Cytryny',
    price: 11,
    type: 'salad',
  },
  {
    name: 'Sałatka Grecka',
    description:
      'Klasyczna sałatka grecka z oliwkami i serem feta. Klasyka Grecji.',
    image:
      'https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_960_720.jpg',
    ingredients: 'Ser Feta, Ogórek, Cebula, Papryka, Czarne Oliwki',
    price: 13,
    type: 'salad',
  },
  {
    name: 'Tiramisu',
    description:
      'Biszkopty i delikatny krem, którego smak podkreśla kawowa nuta. Pysznie!',
    image:
      'https://cdn.pixabay.com/photo/2017/03/19/18/22/italian-food-2157246_960_720.jpg',
    ingredients: 'Mascarpone, Biszkopty, Kakao, Likier',
    price: 14,
    type: 'dessert',
  },
  {
    name: 'Naleśniki z Truskawkami',
    description:
      'Pyszne naleśniki z truskawkami to najlepsza propozycja na słodki obiad!',
    image:
      'https://cdn.pixabay.com/photo/2015/09/09/18/31/strawberries-932383_960_720.jpg',
    ingredients: 'Naleśniki, Truskawki, Polewa',
    price: 18,
    type: 'dessert',
  },
  {
    name: 'Kanelbullar',
    description:
      'Słodkie i kuszące zapachem cynamonu. Najlepsze na leniwe popołudnie.',
    image:
      'https://cdn.pixabay.com/photo/2017/07/20/21/28/kanelbullar-2523876_960_720.jpg',
    ingredients: 'Kanelbullar, Cukier, Posypka',
    price: 18,
    type: 'dessert',
  },
]

export default dishes
