import React from "react";
import { SkillSet } from "../Config/Config";
import styled from "styled-components";

function Resume() {
  return (
    <Wrapper>
      <div className="card-inner" id="resume">
        <div className="card-wrap">
          <div className="content skills">
            <div className="title">
              <span className="first-word">My </span>
              Skills
            </div>
            <div className="row grid-items border-line-v">
              <ul className="grid-item">
                {SkillSet &&
                  SkillSet.map((val, ind) => (
                    <li key={val.id}>
                      <div className="cards">
                        <div className="card-img">
                          <img
                            width="459"
                            height="543"
                            src={val.imgsrc}
                            alt="img"
                          />
                        </div>
                        <div className="card-title">
                          <span className="title">{val.name}</span>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;

const Wrapper = styled.section`
  .resume-items .resume-item.active .date {
    border: 1px solid var(--highlight-primary);
    color: ${({ theme }) => theme.highlight.primary};
    border: 1px solid ${({ theme }) => theme.highlight.primary};
  }

  .resume-items .resume-item {
    position: relative;
    padding: 30px 0 30px 0;
    .date {
      position: relative;
      display: inline-block;
      margin: 0 0 11px 0;
      padding: 0 5px;
      font-size: 0.8rem;
      line-height: 18px;
      font-weight: 400;
      color: ${({ theme }) => theme.highlight.secondary};
      border: 1px solid ${({ theme }) => theme.highlight.secondary};
      border-radius: 4px;
    }
    .name {
      font-size: 1rem;
      color: rgb(${({ theme }) => theme.title.primary});
      font-weight: 500;
      text-transform: none;
    }
    .company {
      margin: 0 0 11px 0;
      font-size: 0.8rem;
      color: rgb(${({ theme }) => theme.title.secondary});
      font-weight: 400;
      text-transform: none;
    }
    .experience-desc {
      position: relative;
      ul {
        position: relative;
        margin: 0 auto;
        padding-inline-start: 20px;
        li {
          list-style: disc;
          color: rgb(${({ theme }) => theme.title.secondary});
        }
      }
    }
  }
  .cards {
    width: 120px;
    height: 100px;
    margin: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.highlight.primary};
    border-radius: 10px;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      width: auto;
      height: 1px;
      background: var(--gradient3);
      left: 10%;
      right: 0;
      bottom: 0;
      margin: -10px auto;
      padding: 0;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
    .card-img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70%;

      img {
        width: 30%;
        height: auto;
      }
    }
    .card-title {
      padding: 5px 0px;
      .title {
        text-transform: capitalize;
        font-size: 0.9rem;
        &::after {
          content: initial;
        }
      }
    }
  }
  @media (max-width: 420px) {
    .cards {
      width: 110px;
      height: 100px;
      margin: 20px 0px 20px 0px;
    }
  }
  @media (max-width: 1199px) {
    .content.about .row .col:first-child {
      padding-bottom: 0;
    }
  }
`;
