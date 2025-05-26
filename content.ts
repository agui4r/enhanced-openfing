(function() {

    // Constants
    const flag = 'enhanced-openfing';    // class and localStorage key
    const styleId = 'enhanced-openfing-id';    // style sheet id
    const classesToRemove = [
        '.navbar',
        '.footer',
        '.video__interactions',
        'dialog#share-modal'
    ];

    const cssEnhanced = `

    /* dark body and white titles */
    html.${flag}, html.${flag} body{
      background:#121212!important;
      color:#e0e0e0!important;
    }

    /* class list white letters */
    html.${flag} .class-list__item-number,
    html.${flag} .class-list__item-name{
      color:#e0e0e0!important;
    }

    /* class list black background */
    html.${flag} .class-list__item-container--active{
      background:#263238!important;
    }

    /* enhanced scrollbar (modern browsers) */
    html.${flag} .class-list{
      scrollbar-width:thin;
      scrollbar-color:#000 #1e1e1e;
    }


    /* enhanced scrollbar (webKit fallback - safari, chrome ≤ 120) */
    html.${flag} .class-list::-webkit-scrollbar{
      width:8px;
    }
    html.${flag} .class-list::-webkit-scrollbar-track{
      background:#1e1e1e;
    }
    html.${flag} .class-list::-webkit-scrollbar-thumb{
      background:#000;
      border-radius:4px;
    }

    /* slightly darken media */
    /* CHECK IF SVG DARKEN IS NECESSARY */
    html.${flag} img:not([src$=".svg"]),
    html.${flag} video{
      filter:brightness(.8) contrast(1.2);
    }

    `;
    
    // Auxiliar functions
    const removeIfExists = (inputEl: string)  => {
        const el = document.querySelector(inputEl);
        el && el.remove();
    };

    // Course page
    classesToRemove.forEach(c => removeIfExists(c));

    let st = document.getElementById(styleId);
    if (st) {
        st.textContent = cssEnhanced;
    } else {
        st = Object.assign(document.createElement('style'),
                            { id: styleId, textContent: cssEnhanced });
        document.head.appendChild(st);
        document.documentElement.classList.add(flag);
        // localStorage.setItem(flag, 1); maybe
    }
    

})();