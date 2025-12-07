import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icônes
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

// Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                Nous Sommes <br />
                NKUL TECH
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                Nous Construisons l’intelligence de demain
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Là où une idée se transforme en projet. Aidez vos startups, entreprises et idées à grandir davantage et à résoudre les problèmes avec la puissance du code.
            </Typography>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    Consultez Nos Projets
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};
export default HeroContent;