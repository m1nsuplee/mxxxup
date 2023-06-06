type LookUpWordsResponse = {
  data: {
    channel: {
      total: number;
      title: string;
      start: number;
      num: number;
      link: string;
      lastbuilddate: string;
      description: string;
      item: Word[];
    };
  };
};
