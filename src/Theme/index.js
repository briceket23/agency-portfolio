import { createTheme } from '@mui/material/styles';

// Création d'un thème à dominante bleue pour NKUL TECH
const theme = createTheme({
    typography: {
        fontFamily: "Inter"
        // 400 Regular, 500 Medium, 600 Semi-Bold, 700 Bold, 800 Extra-Bold
    },
    palette: {
        text: {
            primary: "#121315", // Noir par défaut (conservé)
            secondary: "#1E88E5" // Utilisé la couleur primaire comme couleur secondaire du texte
        },
        background: {
            default: "#FFFFFF" // Blanc par défaut (conservé)
        },
        primary: {
            main: "#1E88E5", // NOUVELLE COULEUR PRIMAIRE : Bleu Cobalt (Professionnel)
            light: "#64B5F6", // NOUVEAU : Bleu Clair (pour les fonds légers ou accents)
            box_shadow_black: " #0000001c", // Box Shadow Black (conservé)
            success: "#4CAF50", // Succès (Vert conservé)
            box_shadow_client: "#0000001c", /// Box Shadow Clinet Slider (conservé)
            box_show_blog: "#1E88E521", // NOUVEAU : Box Shadow Blog Section (Bleu avec transparence)
            box_shadow_blog_2: "#0000001a", // Box Shadow Blog Category (conservé)
            divider: "#AEAEAE", // Divider Color (conservé)
            social_bg: "#E7E7E7", // Social Background Color (conservé)
            social_color: "#415674", // Social Icon Color (conservé)
            inputBorder: "#0000001f", // For NewsLetter Input Border Color (conservé)
            // MISE À JOUR DES DÉGRADÉS (Remplacement du Rouge par le Bleu)
            HeroGradient: "linear-gradient(to right, #FFF , #1E88E542)", // NOUVEAU : Dégradé du Blanc au Bleu transparent
            WorkGradient: "linear-gradient(to right, #1E88E542, #FFF)", // NOUVEAU : Dégradé du Bleu transparent au Blanc
            ContactGradient: "linear-gradient(to right, #1E88E542, #FFFFFF4A)", // NOUVEAU : Dégradé du Bleu transparent au Blanc très transparent
        }
    },
    breakpoints: {
        values: {
            xxs: 0, 
            xs: 360, 
            sm: 480, 
            msm: 576, 
            lsm: 640, 
            smd: 768, 
            md: 992, 
            lg: 1200, 
            xl: 1536, 
            xxl: 1980 
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 0px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 480px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 992px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 1200px)': {
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Inter"
                },
            },
        },
    }
});

export default theme;