import styled from "styled-components";
import { setFlex } from "../../styles/mixins/mixins.styles";

interface WrapperProps {
  short: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
${(props) => (props.short ? "" : setFlex({ align: "center" }))};
        .image {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          margin-right: 1rem;

          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            border: 0.2rem solid ${(props) => props.theme.dark1};
          }
        }

        .info {
          .name {
            text-transform: capitalize;
          }

          .register-date {
            font-weight: 300;
          }

          .rating {
            ${setFlex({ align: "center" })}
            gap: 0.2rem;

            .star {
              color: ${(props) => props.theme.dark1};
              position: relative;
              top: 0.1rem;
            }
          }
        }
      }
`;
