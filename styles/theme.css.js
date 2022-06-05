import { createGlobalStyle } from 'styled-components'

export const theme = {
  body: '',
  text: '',
  accent: '',
  link: ''
}

export const GlobalStyles = createGlobalStyle`

    :root{
        --h-one-size: 5rem;
        --h-one-line: 10rem;
        --h-two-size: 2.5rem;
        --h-two-line: 3.5rem;
        --h-three-size: 2rem;
        --h-three-line: 3rem;
        --h-four-size: 1.5rem;
        --h-four-line: 2.5rem;

        --text-size: 1rem;
        --text-line: 2rem;
        --link-size: 0.9rem;

        --box-shadow: 0 1px 5px rgba( 0,0,0, 0.1 ); 
        --box-shadow-hover: 0 2px 6px rgba( 0,0,0, 0.3 );
        --border-radius: 7px;
    }

    * {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    }

    html,
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        width:100%;
        overflow-x: hidden;
    }

    h1 {
        font-size:var(--h-one-size);
        line-height:var(--h-one-line);
        font-weight:bold;
        margin:0.5rem;
    }

    h2 {
        font-size:var(--h-two-size);
        line-height:var(--h-two-line);
        font-weight:bold;
        margin:0.5rem;
    }

    h3 {
        font-size:var(--h-three-size);
        line-height:var(--h-three-line);
        font-weight:bold;
        margin:0.5rem;
    }
    
    h4 {
        font-size:var(--h-four-size);
        line-height:var(--h-four-line);
        font-weight:bold;
        margin:0.5rem;
    }

    p,
    span,
    li,
    strong,
    blockquote {
        font-size: var(--text-size: 1rem);
        line-height: var(--text-line);
        margin-bottom:1rem;
    }

    strong {
        font-weight:bold;
    }

    blockquote {
        font-style:italic;
    }

    a,
    a:hover,
    a:focus {
        font-size:var(--link-size);
        text-decoration:none;
    }

`
