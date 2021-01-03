module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      borderRadius:{
         '8':'8px',
         '5':'5px'
      },
      boxShadow:{
         'card':'0 0 11px 0 rgba(198, 210, 213, 0.4);'
      },
      fontFamily: {
        'Muli': ['Mulish', 'serif'],
        'SourceSansPro': ['Source Sans Pro', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      fontSize:{
        'cardTitle':'20px',
        'cardSubTitle':'15px',
        'sectionTitle':'30px'
      },
      fontWeight:{
        'cardTitle':'bold',
        'cardSubTitle':'300'
      },
      extend: {
        colors:{
          'slate': '#586877',
          'charcoalGrey': '#353c45',
          'black': '#000000',
          'iceBlue': '#eaeeef',
          'paleGrey': '#fafcfd',
          'brownGrey': '#9e9e9e',
          'reddish': '#cd3d3d',
          'statusClosed': '#27a428',
          'yellow': '#ffbb41',
          'lightBlueGrey': '#c6d2d5',
          'coolGrey': '#8ca6aa',
          'paleBlue': '#e5e6e7'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
