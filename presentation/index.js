// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
  city:
    'http://www.hdfmagazine.com/wp-content/uploads/2014/12/Caroline-Gutman-medium.jpeg',
  kat:
    'http://www.hdfmagazine.com/wp-content/uploads/2014/12/Caroline-Gutman-medium.jpeg',
  logo:
    'http://www.hdfmagazine.com/wp-content/uploads/2014/12/Caroline-Gutman-medium.jpeg',
  markdown:
    'http://www.hdfmagazine.com/wp-content/uploads/2014/12/Caroline-Gutman-medium.jpeg',
  intro: {
    bradFrost: require('./../assets/intro_brad_frost.jpg'),
    devices: require('./../assets/intro_devices.png'),
    screen_fragmentation: require('./../assets/intro_screen_fragmentation.jpg')
  },
  atomic: {
    atoms: require('./../assets/atomic_icon-atom.png'),
    molecules: require('./../assets/atomic_icon-molecule.png'),
    organisms: require('./../assets/atomic_icon-organism.png'),
    templates: require('./../assets/atomic_icon-template.png'),
    pages: require('./../assets/atomic_icon-page.png'),
    flow: require('./../assets/atomic_icon-flow.png'),
    sample: {
      atoms: require('./../assets/atomic_sample_atom.png'),
      molecules: require('./../assets/atomic_sample_molecule.png'),
      organisms: require('./../assets/atomic_sample_organism.png'),
      templates: require('./../assets/atomic_sample_template.png'),
      pages: require('./../assets/atomic_sample_page.png')
    }
  }
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  state = {
    steps: 0
  };

  updateSteps = steps => {
    if (this.state.steps !== steps) {
      // eslint-disable-line no-invalid-this
      this.setState({ steps }); // eslint-disable-line no-invalid-this
    }
  };

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {/* INTRO */}
        <Slide transition={['zoom']} bgColor="primary" notes="@TODO">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Atomic Design
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Craft effective interface design systems
          </Text>
        </Slide>

        {/* INTRO - Screens */}
        <Slide
          transition={['slide']}
          notes={`
                * We used to work targeting specific screen size<br/>
                * Many designs to validate<br/>
                * Screen fragmentation keeps growing<br/>
            `}
        >
          <Image src={images.intro.devices.replace('/', '')} />
        </Slide>

        <Slide
          notes={`
                * As the craft of Web design continues to evolves, we're
                recognizing the need to develop thoughtful design systems rather
                than creating simple collection of web pages...<br />
                * Atomic design is methodology for creating design systems.
                * Let's focus on what's compose the page !<br/>
            `}
        >
          <Image src={images.intro.screen_fragmentation.replace('/', '')} />
          <Text>Screen fragmentation - @TODO add source</Text>
        </Slide>

        {/* INTRO - Brad Frost */}
        <Slide
          transition={['slide']}
          bgImage={images.intro.bradFrost.replace('/', '')}
          bgDarken={0.75}
          notes={`
                * Who is Brad Frost<br/>
                * Designer<br/>
                * Introduce Atomic design in 2013 - Tech Crunch<br/>
                * Bio/Chemistry analogy<br/><br/>
                * whether solid, liquid, gas, simple, complex, etc<br/>
            `}
        >
          <Layout>
            <BlockQuote>
              <Quote size={2}>
                The thought is that all matter is comprised of atoms.
              </Quote>
              <Cite>
                Brad Frost
                <Link href="http://atomicdesign.bradfrost.com/">
                  <Text textColor="tertiary">Atomic Design</Text>
                </Link>
              </Cite>
            </BlockQuote>
          </Layout>
        </Slide>

        {/* ATOMIC - Components */}
        <Slide transition={['slide']} notes={``}>
          <Image src={images.atomic.flow.replace('/', '')} />
          <Text
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            "Atomic design is not a linear process, but rather a mental model to
            help us think of our user interfaces as both a cohesive whole and a
            collection of parts at the same time".
          </Text>
        </Slide>

        {/* ATOMIC - Atoms */}
        <Slide
          transition={['slide']}
          notes={`
                * Indivisible<br/>
                * No functional role on it's own<br/>
            `}
        >
          {' '}
          <Image src={images.atomic.atoms.replace('/', '')} width="100px" />
          <Text
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            <b>Atoms</b> are basic building blocks, Applied to web interface
            atoms are our HTML tags, such as an input text field or a button.
          </Text>
          <Image
            src={images.atomic.sample.atoms.replace('/', '')}
            width="500px"
          />
        </Slide>

        {/* ATOMIC - Molecules */}
        <Slide transition={['slide']} notes={``}>
          <Image src={images.atomic.molecules.replace('/', '')} width="100px" />
          <Text
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            In interfaces, <b>molecules</b> are relatively simple groups of UI
            elements functioning together as a unit. For example, a form label,
            search input, and button can join together to create a search form{' '}
            <b>molecule</b>.
          </Text>
          <Image
            src={images.atomic.sample.molecules.replace('/', '')}
            width="500px"
          />
        </Slide>

        {/* ATOMIC - Organisms */}
        <Slide transition={['slide']} notes={``}>
          <Image src={images.atomic.organisms.replace('/', '')} width="100px" />
          <Text
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            <b>Organisms</b> are relatively complex UI components composed of
            groups of molecules and/or atoms and/or other organisms. These
            organisms form distinct sections of an interface.
          </Text>
          <Image
            src={images.atomic.sample.organisms.replace('/', '')}
            width="500px"
          />
        </Slide>

        {/* ATOMIC - Template */}
        <Slide
          transition={['slide']}
          notes={`
            * Say goodbye to our chemistry analogy <br/>
        `}
        >
          <Image src={images.atomic.templates.replace('/', '')} width="100px" />
          <Text
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            <b>Templates</b> are page-level objects that place components into a
            layout and articulate the design’s underlying content structure.
          </Text>
          <Image
            src={images.atomic.sample.templates.replace('/', '')}
            width="500px"
          />
        </Slide>

        {/* ATOMIC - Page */}
        <Slide transition={['slide']} notes={``}>
          <Image src={images.atomic.pages.replace('/', '')} width="100px" />
          <Text
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            <b>Pages</b> are specific instances of templates that show what a UI
            looks like with real representative content in place.
          </Text>
          <Image
            src={images.atomic.sample.pages.replace('/', '')}
            width="500px"
          />
        </Slide>

        {/* ADVANTAGES */}
        <Slide bgColor="secondary" transition={['slide']} notes={``}>
          <Image src={images.atomic.pages.replace('/', '')} width="100px" />
          <Heading textColor="tertiary" fit size={5}>
            Advantage
          </Heading>
          <Text
            textColor="primary"
            style={{
              fontSize: '1.96rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            <b>Pages</b> are specific instances of templates that show what a UI
            looks like with real representative content in place.
          </Text>
          <Image
            src={images.atomic.sample.pages.replace('/', '')}
            width="500px"
          />
        </Slide>
      </Deck>
    );
  }
}
