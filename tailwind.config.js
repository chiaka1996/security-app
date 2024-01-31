tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary_color: '#3DC9B7',
            background_color: "#162220",
            basic: "#E7E8E7",
            natural: "#FEFFFE",
            placeholder_color: "#B4B5B4",
            logo: "#C3EEE9",
            site: "#6C0CE9",
            tags: "#108C1E",
            guards: "#C5A816",
            green: "#00FF00",
            table: "#EAECF0",
            checkin: "#E8F9EA",
            checkInText: '#0C6C17',
            checkout: "#EDE4B7",
            checkOutText: "#8C7710",
            db: "#212D2B"
          },
          padding: {
            "1%": '1%',
            "2%": "2%",
            "10%": "10%",
            "5%": "5%",
            "basic_padding": "5%",
            'small': '2%',
            "smaller": "1%",
            "smallest": "0.5%"
          },
          spacing: {
                '5%': '5%',
                '2%': '2%',
                'mainMargin': "5%"
            },
          fontFamily: {
            primary: ['Inter'],
            headerWeight: "500",
            normalWeight: "400",
            biggerWeight: "700",
          },
          fontSize:{
            big : "20px",
            bigger: "30px",
            normal: "14px",
            small: "12px",
            medium: "16px"
          },
          fontWeight:{
            big: "500",
            normal: "400",
            bigger: "700",
          }
        }
      }
    } 
// module.exports = {
//     theme: {
//       screens: {
//         sm: '480px',
//         md: '768px',
//         lg: '976px',
//         xl: '1440px',
//       },
//       colors: {
//         'blue': '#1fb6ff',
//         'pink': '#ff49db',
//         'orange': '#ff7849',
//         'green': '#13ce66',
//         'gray-dark': '#273444',
//         'gray': '#8492a6',
//         'gray-light': '#d3dce6',
//         clifford: '#3DC9B7',
//       },
//       fontFamily: {
//         sans: ['Graphik', 'sans-serif'],
//         serif: ['Merriweather', 'serif'],
//       },
//       extend: {
//         spacing: {
//           '128': '32rem',
//           '144': '36rem',
//         },
//         borderRadius: {
//           '4xl': '2rem',
//         }
//       }
//     }
//   }