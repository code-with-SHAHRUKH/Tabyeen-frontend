// import * as React from 'react';
import type { Metadata } from 'next';

import Image from 'next/image';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal';

import ReusableButton from '@/components/ReuseableButton';

interface Book {
  id: number;
  title: string;
  image: string;
}

const books: Book[] = [
  {
    id: 1,
    title: 'Rafugaran e Ummat e Islamia',
    image: 'RafugaranCroped.webp',
  },
  {
    id: 2,
    title: 'Falsafa e Qayyam e Imam Hussain',
    image: 'falsafa-qayyam-e-imam-e-hussainCroped.webp',
  },
  {
    id: 3,
    title: 'Adab e Fahme Quran',
    image: 'Adab_fehm-e-quranCroped.webp',
  },
  {
    id: 4,
    title: 'Ashura ba unwan e maktab',
    image: 'Ashura_ba-unwan-e-maktabCroped.webp',
  }
];

export const metadata: Metadata = {
  title: 'About Us | Islamimarkaz',
  description:
    'Ustad e Muhtaram Syed Jawad Naqvi is a renowned Shia Islamic scholar, trained in Qum under prominent scholars like Ayatullah Misbah Yazdi and Ayatullah Jawadi Amuli. His lectures and research cover topics such as Tafseer-e-Quran, Nahj-ul-Balagha, Islamic ethics, and Islamic revolution. He founded Jamia Urwa tul Wusqa, focusing on Islamic education. Additionally, he delivers weekly lectures analyzing current affairs from an Islamic perspective. His mission is to promote pure Islam (Islam-e-Naab-e-Muhammadi), unity among Muslims, and justice. Islamimarkaz is his official platform for sharing his lectures and research globally.',
  openGraph: {
    title: 'About Islamimarkaz',
    description:
      'Ustad e Muhtaram Syed Jawad Naqvi is a renowned Shia Islamic scholar, trained in Qum under prominent scholars like Ayatullah Misbah Yazdi and Ayatullah Jawadi Amuli. His lectures and research cover topics such as Tafseer-e-Quran, Nahj-ul-Balagha, Islamic ethics, and Islamic revolution. He founded Jamia Urwa tul Wusqa, focusing on Islamic education. Additionally, he delivers weekly lectures analyzing current affairs from an Islamic perspective. His mission is to promote pure Islam (Islam-e-Naab-e-Muhammadi), unity among Muslims, and justice. Islamimarkaz is his official platform for sharing his lectures and research globally.',
  },
};

export default async function AboutUs() {
  return (
    <Box
      py={{ xs: 4, md: 4 }}
      px={{ xs: 4, md: 10 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, md: 10 },
        '& .section-image': {
          borderRadius: '8px',
          objectFit: 'cover',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {/* About Us Section */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 0 },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '100%', sm: '73%', md: '30%' },
          }}
        >
          <Fade triggerOnce cascade>
            <Image
              src="/images/JawadNaqviSahab.webp"
              alt="Jawad Naqvi"
              width={300} // Set a fixed width
              height={600} // Set a fixed height
              className="section-image"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Fade>
        </Box>

        {/* Text Section */}
        <Box sx={{ width: { xs: '100%', md: '64%' }, pl: { xs: 0, md: 4 } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: '1.7rem', // Mobile view (xs)
                sm: '2rem', // Small screens (sm)
                md: '2.5rem', // Medium screens (md) and above
              },
            }}
          >
            Ustad e Muhtaram Syed Jawad Naqvi
          </Typography>
          <Typography variant="body1" color="#626262" fontWeight="medium" mt={2} lineHeight={1.7}>
            Ustad e Muhtaram <b>Syed Jawad Naqvi</b> is a distinguished Shia Islamic scholar,
            recognized for his deep insights into Islamic teachings. He studied in Qum under
            prominent scholars like Ayatullah Misbah Yazdi and Ayatullah Jawadi Amuli, gaining
            profound knowledge in various Islamic disciplines. His research and lectures cover a
            wide range of topics, including Tafseer-e-Quran, Tafseer-e-Nahj-ul-Balagha,
            Maqsad-e-Qayam-e-Imam Hussain, Islamic Ethics (Akhlaq-e-Islami), the Concept of Islamic
            Revolution (Inqilab-e-Islami), and importance of Islamic Unity (Wahdat e Ummat). He is
            also the founder of <b>Jamia Urwa tul Wusqa</b> an institution dedicated to Islamic
            education and research. In addition to his academic work, he delivers weekly lectures to
            give analysis of current national and international affairs from an Islamic perspective.
            His mission focuses on preaching the purest form of Islam (Islam-e-Naab-e-Muhammadi),
            fostering unity among Muslims, and advocating for justice. <b>Islamimarkaz</b> is his
            official platform for sharing his lectures and research with a global audience.
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Jamia Urwa tul Wusqa Section */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Fade triggerOnce cascade>
            <Image
              src="/images/Urvatul-Vuska2.jpg" // Path from public folder
              alt="Jamia Urwatul Vusqa"
              layout="responsive"
              width={1200} // Adjust the width according to the image's aspect ratio
              height={600} // Adjust the height according to the image's aspect ratio
              className="section-image"
            />
          </Fade>
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            pr: { xs: 0, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'left',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: '1.7rem', // Mobile view (xs)
                sm: '2rem', // Small screens (sm)
                md: '2.5rem', // Medium screens (md) and above
              },
              width: '100%',
            }}
          >
            Jamia Urwa tul Wusqa
          </Typography>
          <Typography variant="body1" color="#626262" fontWeight="medium" mt={2} lineHeight={1.7}>
            Jamia Urwa tul Wusqa is an esteemed Islamic institution founded by Ustad e Muhtaram Syed
            Jawad Naqvi in 2010, on the occasion of the 13th Rajab, the birthday of{' '}
            <b>Imam Ali (A.S.) </b>, with the name of his title &quot;Urwa tul Wusqa&quot;. The
            institution is dedicated to providing pure Islamic education to boys, with a focus on
            nurturing students to understand Islam at an advanced level.
          </Typography>

          {/* this is button to navigate user Jamia Location*/}
          {/* and this is client component cuz 'href' is client side feature */}

          <ReusableButton
            href="https://maps.app.goo.gl/V6FAoadms6DAPmqX7"
            color="primary.main"
            icon={LocationOnIcon}
            text="View Location"
          />
        </Box>
      </Box>

      <Divider />

      {/* Jamia Ummul kitaab Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
          }}
        >
          <Fade triggerOnce cascade>
            <Image
              src="/images/UmmulKitab.webp" // Path from public folder
              alt="Jamia Urwatul Vusqa"
              layout="responsive"
              width={1200} // Adjust the width according to the image's aspect ratio
              height={600} // Adjust the height according to the image's aspect ratio
              className="section-image"
            />
          </Fade>
        </Box>

        {/* Text Section */}
        <Box sx={{ width: { xs: '100%', md: '60%' }, pl: { xs: 0, md: 4 } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: '1.7rem', // Mobile view (xs)
                sm: '2rem', // Small screens (sm)
                md: '2.5rem', // Medium screens (md) and above
              },
            }}
          >
            Jamia Ummul Kitab
          </Typography>
          <Typography variant="body1" color="#626262" fontWeight="medium" mt={2} lineHeight={1.7}>
            Jamia Ummul Kitab is a female Islamic institution also founded by Ustad e Muhtaram Syed
            Jawad Naqvi, dedicated to providing high-quality Islamic education. Similar to Jamia
            Urwa tul Wusqa, it aims to nurture and educate women in various fields of Islamic
            knowledge, empowering them to deepen their understanding of Islam at advanced levels.
            The institute was established on the 20th of Jamadi us Sani, the day of the birth of
            Lady <b>Fatima Zahra (S.A.)</b>, whose life and teachings serve as a guiding light for
            the institutional values.
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Jamia Masjid Baitul Ateeq Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Fade triggerOnce cascade>
            <Image
              src="/images/Masjid.webp" // Path from public folder
              alt="Jamia Urwatul Vusqa"
              layout="responsive"
              width={1200} // Adjust the width according to the image's aspect ratio
              height={600} // Adjust the height according to the image's aspect ratio
              className="section-image"
            />
          </Fade>
        </Box>

        {/* Text Section */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, pr: { xs: 0, md: 4 } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: '1.7rem', // Mobile view (xs)
                sm: '2rem', // Small screens (sm)
                md: '2.5rem', // Medium screens (md) and above
              },
            }}
          >
            Masjid e Bait ul Ateeq
          </Typography>
          <Typography variant="body1" color="#626262" fontWeight="medium" mt={2} lineHeight={1.7}>
            Masjid e Bait ul Ateeq is a magnificent mosque located in the vicinity of Jamia Urwa tul
            Wusqa. The mosque hosts daily prayers, Friday prayers, and Eid prayers, serving as a
            central place of worship and spiritual connection for the community and the students and
            faculty of Jamia. In addition to regular prayers, Masjid e Bait ul Ateeq plays a key
            role in organizing and hosting significant events, including the Ashra e Majlis-e-Imam
            Hussain during Muharram and Ayyam e Fatmiyah. It is also home to the annual Wahdat
            Conference, along with several other conferences and conventions organized by *Tehreek e
            Bedari e Ummat e Mustufa*, which promote unity among Muslims and address important
            religious and social issues.
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Jamia Deenul Qaim */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Image Section */}

        <Box
          sx={{
            width: { xs: '100%', md: '60%' }
          }}
        >
          <Fade triggerOnce cascade>
            <Image
              src="/images/DeenULQayim3.webp"
              alt="Jamia Urwatul Vusqa"
              layout="intrinsic" // Maintains proper aspect ratio
              width={1200} // Adjust the width according to the image's aspect ratio
              height={600} // Increased height (no effect on width)
              className="section-image"
            />
          </Fade>
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '55%' },
            pl: { xs: 0, md: 4 },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: '1.7rem', // Mobile view (xs)
                sm: '2rem', // Small screens (sm)
                md: '2.5rem', // Medium screens (md) and above
              },
              width: '100%',
            }}
          >
            Jamia Deen ul Qayyim
          </Typography>
          <Typography variant="body1" color="#626262" fontWeight="medium" mt={2} lineHeight={1.7}>
            Jamia Deen ul Qayyim, founded by Ustad e Muhtaram Syed Jawad Naqvi, is a virtual Islamic
            semenary dedicated to providing accessible Islamic education for individuals who wish to
            study Islam alongside their other activities. The institution offers a diverse range of
            online courses, including Tafseer-e-Quran, Tafseer-e-Nahj-ul-Balagha, Adaab-e-Islami,
            Insan Shanasi, and Inqlab-e-Islami, all taught by experienced teachers from Jamia Urwa
            tul Wusqa. Jamia Deen ul Qayyim aims to make Islamic education flexible and convenient,
            ensuring that people from all walks of life can deepen their knowledge of Islam at their
            convenience.
          </Typography>

          {/* this is button to navigate user to Deen ul Qayyim*/}
          {/* and this is client component because 'href' is browser side feature */}

          <ReusableButton
            href="https://deenulqayyim.com/"
            color="primary.main"
            icon={ArrowForwardIcon}
            text="View More"
          />
        </Box>
      </Box>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
          sx={{
            fontSize: {
              xs: '1.7rem', // Mobile view (xs)
              sm: '2rem', // Small screens (sm)
              md: '2.5rem', // Medium screens (md) and above
            },
          }}
        >
          Books published by Ustad e Muhtaram Syed Jawad Naqvi
        </Typography>

        <Fade triggerOnce cascade>
          <Grid container spacing={2} justifyContent="center">
            {books.map((book, index) => (
              <Grid item xs={12} sm={6} md={3} key={book.id}>
                <Card
                  sx={{
                    maxWidth: 200,
                    mx: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    borderWidth: 1,
                    borderColor: 'grey.200',
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                        }}
                    image={`/images/${book.image}`}
                    alt={book.title}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }} component="div">
                      {book.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>

        <ReusableButton
          href="https://syedjawadnaqvi.com"
          color="#0096FF"
          icon={ArrowForwardIcon}
          text="View More"
          width={{ xs: '90%', sm: '70%', md: '45%' }} // Custom width
        />
      </Box>
    </Box>
  );
}
