const wines = [
    {
      title: "Generali Meakins",
      price: "Ksh 4700",
      tags: "AU | Bottle"
    },
    {
      title: "Ka Quarter",
      price: "Ksh 5900",
      tags: "AU | Bottle"
    },
    {
      title: "La Vieillw Rose",
      price: "Ksh 440",
      tags: "FR | 750 ml"
    },
    {
      title: "Rhino Pale Ale",
      price: "Ksh 3800",
      tags: "CA | 750 ml"
    },
    {
      title: "Irish Guinness",
      price: "Ksh 4200",
      tags: "IE | 750 ml"
    }
  ];


const cocktails = [
    {
      title: 'Aperol Sprtiz',
      price: 'Ksh 20000',
      tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
    },
    {
      title: "Dark 'N' Stormy",
      price: 'Ksh 16000',
      tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
      title: 'Daiquiri',
      price: 'Ksh 10500',
      tags: 'Rum | Citrus juice | Sugar',
    },
    {
      title: 'Old Fashioned',
      price: 'Ksh 31600',
      tags: 'Bourbon | Brown sugar | Angostura Bitters',
    },
    {
      title: 'Negroni',
      price: 'Ksh 26200',
      tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
  ];

  document.getElementById("text").innerHTML = cocktails.map(getCocktails);

  function getCocktails(items) {
    return [items.title, items.price, items.tags].join("<br />")
  }
  
  document.getElementById("header").innerHTML = wines.map(getFullMenu);
  
  function getFullMenu(item) {
    return [item.title, item.price, item.tags].join("<br />")
  }
