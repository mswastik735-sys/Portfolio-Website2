import ProjectLayout from './ProjectLayout';

export default function HermesProject() {
  return (
    <ProjectLayout title="Hermes AI Assistant">
      <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-white prose-a:text-cream">
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" 
            alt="AI Code Interface" 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Automated Workflows & Delegation</h2>
        <p className="mb-8 leading-relaxed">
          The Hermes AI Assistant is an orchestrator built to manage local function-calling LLMs to automate tedious developer workflows, document processing, and system tasks.
        </p>

        <h3 className="text-xl font-bold mb-4">Core Capabilities</h3>
        <ul className="mb-8 space-y-2 text-text-secondary list-disc pl-6">
          <li><strong>Autonomous Code Refactoring:</strong> Parses entire directories, identifies deprecated patterns, and applies AST-level code modifications.</li>
          <li><strong>Media Processing:</strong> Integrates with FFmpeg wrappers to batch convert, crop, and normalize video and audio assets on demand.</li>
          <li><strong>Documentation Generation:</strong> Watches source files and automatically generates synchronized Markdown documentation into a centralized wiki.</li>
        </ul>

        <h3 className="text-xl font-bold mb-4">Execution Logs</h3>
        <div className="bg-neutral-bg2 border border-white/10 rounded-xl p-6 font-mono text-xs text-text-muted mb-8 overflow-x-auto">
          <p className="text-green-400 mb-2">{'>'} Initializing Hermes Agent...</p>
          <p className="mb-2">{'>'} Loading local model: Llama-3-8B-Instruct</p>
          <p className="mb-2">{'>'} Receiving Task: "Optimize asset directory and convert all PNGs to WEBP"</p>
          <p className="text-yellow-400 mb-2">{'>'} Executing function: process_media_batch()</p>
          <p className="mb-2">{'>'} Converted 142 files. Saved 340MB of space.</p>
          <p className="text-green-400">{'>'} Task completed successfully.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}
