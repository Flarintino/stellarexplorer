import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from "react-intl";

class InsecureNetworkError extends React.Component {
  render() {
    const uri = this.props.location.search.replace("?", "");
    return (
      <Container>
        <Row>
          <h3>
            <FormattedMessage id="error.occurred" />
            {uri ? (
              <FormattedMessage
                id="error.insecure-network.uri"
                values={{ uri: uri }}
              />
            ) : (
              <FormattedMessage id="error.insecure-network" />
            )}
          </h3>
          <FormattedMessage id="error.insecure-network.reason" />
        </Row>
      </Container>
    );
  }
}

export default InsecureNetworkError;
