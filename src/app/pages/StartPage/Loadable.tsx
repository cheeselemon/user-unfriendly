/**
 * Asynchronously loads the component for HomePage
 */

 import { LoadingIndicator } from 'app/components/LoadingIndicator';
import styled from 'styled-components/macro';
import { lazyLoad } from 'utils/loadable';
 
 const LoadingWrapper = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
 `;
 
 export const StartPage = lazyLoad(
   () => import('./index'),
   module => module.StartPage,
   {
     fallback: (
       <LoadingWrapper>
         <LoadingIndicator />
       </LoadingWrapper>
     ),
   },
 );
 