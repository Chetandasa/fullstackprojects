import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1} from './HeaderStyle';

const Header = () => (
    <Container>
      <Div1>
        <Link>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}></a>
            <DiCssdeck size= "3rem" /> <span>Portfolio</span>
        </Link>
      </Div1>
    </Container>
);

export default Header;
