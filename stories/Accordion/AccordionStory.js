import React, { Component } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  Icon
} from '../../src/Components';

export default class AccordionStory extends Component {
  state = {
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Enim movet definitiones mel no
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
            Lorem ipsum dolor sit amet, causae invidunt probatus eu sed, nec
            idque democritum ea. Te eos invidunt tractatos sadipscing, at
            efficiendi ullamcorper duo. Ad errem impetus necessitatibus has, at
            mei euismod vulputate.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Quo integre malorum antiopam
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
            Mundi inimicus interesset at duo, mea in nominati adolescens. Eam cu
            alii probo complectitur. Fastidii democritum id vis, mea oratio
            ubique ponderum ea. No eum postea aperiri menandri. His eu ignota
            adversarium vituperatoribus.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Ad omnis habeo efficiendi sea
        </AccordionTitle>
        <AccordionContent active={activeIndex === 2}>
          <p>
            Lorem ipsum dolor sit amet, pro quem numquam perfecto in, inani
            vidisse quaestio ius ne, ei pri erant possim commune. Eum ut case
            aeterno, wisi euismod vim an. Zril melius nostrud at mei.
          </p>
          <p>
            Est ex qualisque laboramus, sea id laudem integre quaeque, exerci
            facilis consulatu vim ad. Pri eu laudem fastidii concludaturque. Id
            persius adipiscing consequuntur mea, et pro percipit phaedrum
            torquatos.
          </p>
        </AccordionContent>
      </Accordion>
    );
  }
}
