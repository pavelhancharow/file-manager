import * as os from 'node:os';

const cpus = async () => {
  const cpus = os.cpus();
  const totalCPUs = cpus.length;

  const preparedList = cpus.map((cpu) => {
    const { model, speed } = cpu;
    const clockRateGHz = (speed/1000).toFixed(1);

    return { Model: model, 'Clock Rate': `${clockRateGHz} GHz` };
  });

  console.table(preparedList);
  console.log(`Overall amount of CPUS: ${totalCPUs}`);
};

export default cpus;
