import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

import Image from 'components/Image';
import colors from 'scss/colors';

const Box = styled.div`
  max-width: 620px;
  padding: 10px;

  > div .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  > div .align-left {
    text-align: left;

    > div {
      padding: 5px 0;

      > h4 > a {
        color: ${colors.secondary};
        word-break: break-all;
      }
    }
  }
`;

const Component = ({
  description,
  image,
  title,
  url,
}) => (
  <Box>
    <Row>
      <Col className="logo" xs="12" md="4">
        <Image src={image} w="100px" h="100px" />
      </Col>
      <Col className="align-left" xs="12" md="8">
        <Row>
          <h4>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title}
          </h4>
        </Row>
        <Row>{description}</Row>
      </Col>
    </Row>
  </Box>
);

export default Component;
