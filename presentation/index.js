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
  Fit,
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
    bradFrost2: require('./../assets/intro_brad_frost2.jpg'),
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
    flowReact: require('./../assets/atomic_icon-flow-react.png'),
    sample: {
      atoms: require('./../assets/atomic_sample_atom.png'),
      molecules: require('./../assets/atomic_sample_molecule.png'),
      organisms: require('./../assets/atomic_sample_organism.png'),
      templates: require('./../assets/atomic_sample_template.png'),
      pages: require('./../assets/atomic_sample_page.png')
    }
  },
  tools: {
    patternLab: require('./../assets/tools_pattern-lab.png'),
    styleGuides: require('./../assets/tools_styleguidesio.png')
  },
  sample: {
    lego: {
      0: require('./../assets/sample_lego0.png'),
      1: require('./../assets/sample_lego1.png'),
      2: require('./../assets/sample_lego2.png')
    }
  },
  cycles: {
    0: require('./../assets/cycles0.jpg'),
    1: require('./../assets/cycles1.png'),
    2: require('./../assets/cycles2.png')
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
                * Screen fragmentation keeps growing<br/><br/>

                * As the craft of Web design continues to evolves, we're
                recognizing the need to develop thoughtful design systems rather
                than creating simple collection of web pages...<br />
                * Atomic design is methodology for creating design systems.
                * Let's focus on what's compose the page !<br/>
            `}
        >
          <Image src={images.intro.devices.replace('/', '')} />
          <Image
            src={images.intro.screen_fragmentation.replace('/', '')}
            width="500px"
          />
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: '1rem',
              marginTop: '40px'
            }}
          >
            Screen fragmentation - @TODO add source
          </Text>
        </Slide>

        <Slide
          bgColor="#f9e696"
          notes={`
          * Lets talk the same language !
          * we should try to design the way we code
          * we should try to code the way we design
        `}
        >
          <Appear>
            <Text
              style={{
                fontSize: '1.96rem',
                marginTop: '40px',
                marginBottom: '40px'
              }}
            >
              Should Developers design? Should Designers develop?
            </Text>
          </Appear>
          <Image
            src={
              'https://cdn.dribbble.com/users/729829/screenshots/2712522/galshir.gif'
            }
            width="600px"
          />
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

        {/* SAMPLES */}
        <Slide transition={['slide']} notes={``}>
          <Image src={images.sample.lego[0].replace('/', '')} width="300px" />
          <Image src={images.sample.lego[2].replace('/', '')} />
        </Slide>

        {/* DEVELOPMENT CYCLES */}
        <Slide transition={['slide']} notes={``}>
          <Heading
            size={6}
            textColor="secondary"
            caps
            style={{ marginBottom: '20px' }}
          >
            Production cycles
          </Heading>
          <Image src={images.cycles[1].replace('/', '')} width="600px" />
          <Image src={images.cycles[2].replace('/', '')} width="600px" />
        </Slide>

        {/* Advantages */}
        <Slide transition={['slide']} notes={``}>
          <Heading
            size={6}
            caps
            textColor="tertiary"
            style={{ marginBottom: '100px' }}
          >
            Advantages
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6}>Team</Heading>
              <List>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Shared vision
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Collaboration
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Productivity
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={6}>Brand</Heading>
              <List>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Strong identity
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Fast time to market
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Design library
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={6}>User</Heading>
              <List>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Consistent UX
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Quality UX
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
                  Brand education
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        {/* Style Guides */}
        <Slide transition={['slide']} notes={``}>
          <Heading
            textColor={'tertiary'}
            style={{
              textAlign: 'left',
              fontSize: '3rem',
              lineHeight: '3.5rem',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            Create Design System, not pages.<br />The cornestone of good design
            systems are styles guides!
          </Heading>
          <List>
            <ListItem style={{ marginBottom: '20px' }}>
              Organize design materials<br />
              <small
                style={{
                  fontSize: '1.5rem'
                }}
              >
                While providing guidelines, usage, and guardrails
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px' }}>
              Share vocabulary & educate<br />
              <small
                style={{
                  fontSize: '1.5rem'
                }}
              >
                "What is the StatusBarButton?"
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px' }}>
              Make them alive and interactive<br />
              <small
                style={{
                  fontSize: '1.5rem'
                }}
              >
                So that you can see the impact of changes
              </small>
            </ListItem>
          </List>
        </Slide>

        {/* Style Guides - PatternLab */}
        <Slide transition={['slide']} notes={``} bgColor="#ededed">
          <Image src={images.tools.patternLab.replace('/', '')} width="600px" />
        </Slide>

        {/* Style Guides - http://styleguides.io */}
        <Slide
          transition={['slide']}
          notes={``}
          bgDarken={0.85}
          bgImage={images.tools.styleGuides.replace('/', '')}
        >
          <Link textColor="primary" href="http://styleguides.io">
            http://styleguides.io
          </Link>
          <List textColor="primary">
            <ListItem style={{ fontSize: '1.2rem' }}>Mailchimp</ListItem>
            <ListItem style={{ fontSize: '1.2rem' }}>Codepen</ListItem>
            <ListItem style={{ fontSize: '1.2rem' }}>Starbucks</ListItem>
            <ListItem style={{ fontSize: '1.2rem' }}>Yelp</ListItem>
            <ListItem style={{ fontSize: '1.2rem' }}>Lonely Planet</ListItem>
            <ListItem style={{ fontSize: '1.2rem' }}>More ....</ListItem>
          </List>
        </Slide>

        {/* REACT & REDUX */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps>
            Real world - React & Redux
          </Heading>
          <Image src={images.atomic.flowReact.replace('/', '')} />
          <List>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Atoms <sup>(pure)</sup>
              <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                styled components
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Molecules <sup>(pure)</sup>
              <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                behavioural components, simple compositions
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Organisms <sup>(pure)</sup>
              <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                domain compositions
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              EcoSystems<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                routes
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Environment<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                themes, auth coordinator
              </small>
            </ListItem>
          </List>
        </Slide>

        {/* ADVANTAGES */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Advantages
          </Heading>
          <List>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Purity<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                <b>testable</b>, <b>storybook</b>able (knobs)
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Atoms & Molecules are truly re-usable<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                <b>NPM</b> module
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Easy to split tasks<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                <b>Integration</b>: Atoms, Molecules, Organisms
              </small>
              <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                <b>Business logic</b>: Ecosystems, Environment
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Less self-questioning<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                approach, naming, directory structure, ...
              </small>
            </ListItem>
          </List>
        </Slide>

        {/* DEVELOPMENT CYCLE */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            caps
            style={{ marginBottom: '80px' }}
          >
            Production cycles
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} style={{ fontSize: '1.8rem' }}>
                Stage 1
              </Heading>
              <List>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.3rem' }}>
                  Designers<br />
                  <small
                    style={{
                      color: '#000',
                      fontSize: '1.1rem'
                    }}
                  >
                    designing the <b>Atoms</b>
                  </small>
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.3rem' }}>
                  Developers<br />
                  <small
                    style={{
                      color: '#000',
                      fontSize: '1.1rem'
                    }}
                  >
                    <b>nothing</b>
                    <br />
                    <i>or</i>
                    <br />
                    <b>base code</b>:<br />
                    - api interface,<br />
                    - auth,<br />
                    - routing<br />
                  </small>
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={6} style={{ fontSize: '1.8rem' }}>
                Stage 2
              </Heading>
              <List>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.3rem' }}>
                  Designers<br />
                  <small
                    style={{
                      color: '#000',
                      fontSize: '1.1rem'
                    }}
                  >
                    designing the <b>Organisms</b>
                  </small>
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.3rem' }}>
                  Developers<br />
                  <small
                    style={{
                      color: '#000',
                      fontSize: '1.1rem'
                    }}
                  >
                    integrating the <b>Atoms</b>
                  </small>
                </ListItem>
              </List>
            </Fill>
            <Fill>
              <Heading size={6} style={{ fontSize: '1.8rem' }}>
                ...
              </Heading>
            </Fill>
            <Fill>
              <Heading size={6} style={{ fontSize: '1.8rem' }}>
                Stage x
              </Heading>
              <List>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.3rem' }}>
                  Designers<br />
                  <small
                    style={{
                      color: '#000',
                      fontSize: '1.1rem'
                    }}
                  >
                    <b>nothing</b>
                    <br />
                    <i>or</i>
                    <br />
                    designing other <b>A</b>, <b>M</b> or <b>O</b>
                  </small>
                </ListItem>
                <ListItem style={{ marginBottom: '20px', fontSize: '1.3rem' }}>
                  Developers<br />
                  <small
                    style={{
                      color: '#000',
                      fontSize: '1.1rem'
                    }}
                  >
                    connecting <b>Ecosystems</b> to store<br />
                  </small>
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>

        {/* THOUGHTS */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Sustainable code base?
          </Heading>
          <List>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Single responsibility<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                do one thing but do it well
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Name explicitly
              <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                self-documented, DDD
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              No outer margin <sup>(width 100%)</sup>
              <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                delegate responsibility to parent
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Fluid over RWD
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Extensible & themable<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                children, styled-theme
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Consistent styling & layout <br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                color, typography, spacing plalettes
              </small>
            </ListItem>
            <ListItem style={{ marginBottom: '20px', fontSize: '2rem' }}>
              Embed<br />
              <small
                style={{
                  color: '#000',
                  fontSize: '1.2rem'
                }}
              >
                css, tests, readme, stories
              </small>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
