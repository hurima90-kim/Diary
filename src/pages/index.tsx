import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/Main/CategoryList';
import Introduction from 'components/Main/Introduction';
import PostList, { PostType } from 'components/Main/PostList';
import { graphql } from 'gatsby';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  // 파일의 데이터가가 들어있는 edges를 받아옴
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  );
};

export default IndexPage;

export const queryPostList = graphql`
  query queryPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
