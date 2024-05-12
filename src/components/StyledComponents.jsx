import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  color: #333; 
  background-color: #f5f5f5; 
  padding: 20px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContentList = styled.ul`
  list-style-type: none;
  padding: 24px;
  font-size: 24px;
`;

export const ContentItem = styled.li`
  padding: 10px;
  margin: auto;
  font-size: 24px;
  font-weight: 300;
  color: #333; /* Ciemny szary */
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchForm = styled.form`
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #333; 
  background-color: #f5f5f5;
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: #333;
  background-color: #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #ddd; 
  }
`;
