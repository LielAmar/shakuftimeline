export const details_scheme = {
  page_name: "Shakuf Timeline",
  
  page_title: "Shakuf Timeline",
  cover_photo: "https://shakuf.co.il/wp-content/uploads/2022/11/שקוף-לוגו-חלקי-2020-שחור.svg",

  header: {
    text: "Header",
  },

  footer: {
    text: "Footer",
  },
}

export const content_scheme = {
  categories: {
    "1": {
      name: "הצעת הרפורמה",
      color: "#ff0000",
    },
    "2": {
      name: "המהפכה המשפטית",
      color: "#00ff00",
    },
  },

  articles: [
    {
      id: "1",

      title: "כתבה ראשונה על הצעת הרפורמה",
      content: "זהו התוכן של הכתבה",
      main_photo: "https://shakuf.co.il/wp-content/uploads/2024/02/טנקים-של-צהל-במטולה-אוקטובר-2023-צילום-תומר-נויברג-פלאש-90.jpg",

      // For sort & filter
      date: "2021-01-01",
      category: "1",

      full_article: "https://shakuf.co.il/47505"
    },
    {
      id: "2",
      
      title: "כתבה ראשונה של המהפכה המשפטית בשקוף",
      content: "זהו התוכן של הכתבה המאוד מעניינת שלא באמת קיימת :)",
      main_photo: "https://shakuf.co.il/wp-content/uploads/2024/02/היישוב-אבשלום-בעוטף-עזה-צילום-אנדריי-דוסטוב.jpeg",

      date: "2021-03-01",
      category: "2",

      full_article: "https://shakuf.co.il/47446"
    }
  ]
}

export const statistics_scheme = {

}

/*
  const document = doc(db, "shakuf", "details");
  setDoc(document, details_scheme);

  const document2 = doc(db, "shakuf", "content");
  setDoc(document2, content_scheme);

  const document3 = doc(db, "shakuf", "statistics");
  setDoc(document3, statistics_scheme);
*/