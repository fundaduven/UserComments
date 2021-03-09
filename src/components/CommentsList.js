import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  return !comments.length ? (
    <div>Currently there is no comments.</div>
  ) : (
    <div>
      <Container>
        <Row>
          {comments.map((c, i) => {
            return (
              <>
                {i < 4 || (i > 5 && i < 10) ? (
                  <Col md={3} sm={12}>
                    <Comments
                      key={i}
                      name={c.name}
                      email={c.email}
                      body={c.body}
                    />
                  </Col>
                ) : (
                  <Col md={6} sm={12}>
                    <Comments
                      key={i}
                      name={c.name}
                      email={c.email}
                      body={c.body}
                    />
                  </Col>
                )}
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CommentsList;
