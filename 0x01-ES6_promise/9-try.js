export default function guardrail(func) {
  const queue = [];
  try {
    const res = func();
    queue.push(res);
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
