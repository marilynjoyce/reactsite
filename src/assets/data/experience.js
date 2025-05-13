import meta from '../meta.png';
import atlassian from '../Atlassian.webp';
import abbvie from '../abbvie.jpeg';
import splice from '../Splice-logo.png';
import block from '../block.png';

const data = [
    {
        'icon': meta,
        'info': "At Meta, I designed and built from scratch a Bloks Visualizer to help internal developers inspect and debug Bloks UI components, using React (frontend) and Hack (backend). I extended the tool into a compiler visualizer, surfacing all intermediate stages of the Bloks compilation pipeline, including detailed AST transformations. As a second extension, I began to extend visualizer support to mobile Bloks, adapting the tool to render bloks on mobile. This is, by far, the internship I am the most proud of. I learned so much in such a short amount of time, worked with engineers from so many different teams, and was just surrounded by exceptional engineers. Everyone's willingness to help was the most inspiring thing ever. Having gone to Berkeley, my peers mostly worked individually with an ’every man for themselves’ mindset. I was so used to learning alone that coming to Meta, I was pleasantly shocked at how fast someone could unblock me with their expertise. For the first time, I didn't doubt myself as a software engineer.",
        'color': 'white',
        'role': 'Software Engineer Intern',
        'date': 'Summer 2024',
        'textColor': 'black'
    },
    {
        'icon': atlassian,
        'info': "Atlassian was my first software engineering internship. I led the full migration of Bitbucket Cloud’s outdated feature flagging system to LaunchDarkly, improving reliability and developer ergonomics. I replaced all legacy feature flags with modern LaunchDarkly implementations, with seamless integration across services with zero downtime. I collaborated closely with other engineers to audit, refactor, and validate flag usage across the codebase.",
        'color': 'white',
        'role': 'Software Engineer Intern',
        'date': 'Summer 2023',
        'textColor': 'black'
    },
    {
        'icon': abbvie,
        'info': "AbbVie was my first big girl internship. I developed VBA macros to automate key clinical trial tracking workflows in Excel, reducing manual overhead. I built custom scripts to flag trials based on dynamic criteria, including trial milestones and regulatory timelines.",
        'color': `#${'061C49'}`,
        'role': 'Data Science Intern',
        'date': 'Summer 2022',
        'textColor': 'white'
    },
    {
        'icon': splice,
        'info': "Being a musician, this project was super cool. I conducted extensive user research to help Splice define a new strategic segment: the “Creator Market” — aspiring music producers who show interest in DAWs and production tools but never fully engaged, for various reasons. My team and I analyzed qualitative and quantitative data to identify behavioral patterns, pain points, and motivational barriers across this untapped demographic. Our deliverable incorporated strategies for Splice's feature roadmap to push them ahead in the music production market.",
        'color': 'black',
        'role': 'Consultant',
        'date': 'Spring 2022',
        'textColor': 'white'
    },
    {
        'icon': block,
        'info': "I helped expand Square’s payment terminal adoption to 50,000+ Allied Health practitioners by conducting interviews and analyzing survey data to uncover key pain points in payment and practice management workflows. I performed a competitive landscape analysis of the online payments and healthcare software space to identify gaps and differentiation opportunities for Square.",
        'color': 'white',
        'role': 'Consultant',
        'date': 'Fall 2021',
        'textColor': 'black'
    },
]

export default data;