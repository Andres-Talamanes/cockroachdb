import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgresql://andres:ofdcDGI8k0jQj4DuYeuBiQ@ejemplo-1923.jxf.gcp-us-west2.cockroachlabs.cloud:26257/datos_personales?sslmode=verify-full',
});

export default pool;
