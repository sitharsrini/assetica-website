import { useState, useEffect } from "react";
import { LogOut, Users, FileText, Plus, Edit2, Trash2, Eye, EyeOff, Save, X, ChevronLeft } from "lucide-react";

const WORKER = "https://assetica-contact-worker.rsrinivasan163.workers.dev";

function api(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("admin_token");
  return fetch(`${WORKER}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
}

// ── Login ─────────────────────────────────────────────────────
function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("info@assetica.net");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    const res = await fetch(`${WORKER}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) { localStorage.setItem("admin_token", data.token); onLogin(); }
    else { setError("Invalid credentials"); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f8fafc" }}>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "#012241" }}>
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-xl font-bold" style={{ color: "#012241" }}>Admin Panel</h1>
          <p className="text-slate-500 text-sm mt-1">Assetica Dashboard</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-green-400" />
          </div>
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-1">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type={show ? "text" : "password"} required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-green-400 pr-10" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-8 text-slate-400">
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full py-2.5 rounded-xl font-bold text-sm text-white transition-colors"
            style={{ background: "#012241" }}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Contacts Table ─────────────────────────────────────────────
function Contacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("/api/admin/contacts").then(r => r.json()).then(data => { setContacts(data); setLoading(false); });
  }, []);

  if (loading) return <div className="text-center py-20 text-slate-400">Loading...</div>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4" style={{ color: "#012241" }}>Contact Submissions <span className="text-sm font-normal text-slate-400">({contacts.length})</span></h2>
      <div className="overflow-x-auto rounded-xl border border-slate-100">
        <table className="w-full text-sm">
          <thead style={{ background: "#f8fafc" }}>
            <tr>
              {["Name", "Email", "Phone", "Service", "Message", "Date"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={c.id} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-3 font-medium text-slate-700">{c.first_name} {c.last_name}</td>
                <td className="px-4 py-3 text-slate-600">{c.email}</td>
                <td className="px-4 py-3 text-slate-500">{c.phone || "-"}</td>
                <td className="px-4 py-3"><span className="px-2 py-1 rounded-full text-xs" style={{ background: "rgba(75,209,160,0.12)", color: "#059669" }}>{c.service || "-"}</span></td>
                <td className="px-4 py-3 text-slate-500 max-w-xs truncate">{c.message || "-"}</td>
                <td className="px-4 py-3 text-slate-400 text-xs">{new Date(c.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {contacts.length === 0 && <p className="text-center py-10 text-slate-400">No submissions yet</p>}
      </div>
    </div>
  );
}

// ── Blog Editor ────────────────────────────────────────────────
const emptyPost = { slug: "", title: "", excerpt: "", content: "", category: "", image: "", read_time: "3 min read", published: 1 };

function BlogEditor({ post, onSave, onCancel }: { post: any; onSave: () => void; onCancel: () => void }) {
  const [form, setForm] = useState({ ...emptyPost, ...post });
  const [saving, setSaving] = useState(false);
  const isNew = !post.id;

  const save = async () => {
    setSaving(true);
    if (isNew) {
      await api("/api/admin/blogs", { method: "POST", body: JSON.stringify(form) });
    } else {
      await api(`/api/admin/blogs/${post.id}`, { method: "PUT", body: JSON.stringify(form) });
    }
    setSaving(false);
    onSave();
  };

  const field = (label: string, key: string, type = "text", full = false) => (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-xs font-semibold text-slate-600 mb-1">{label}</label>
      <input value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} type={type}
        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-green-400" />
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600"><ChevronLeft size={20} /></button>
        <h2 className="text-lg font-bold" style={{ color: "#012241" }}>{isNew ? "New Blog Post" : "Edit Blog Post"}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {field("Title", "title", "text", true)}
        {field("Slug (URL)", "slug")}
        {field("Category", "category")}
        {field("Read Time", "read_time")}
        {field("Image URL", "image", "text", true)}
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-slate-600 mb-1">Excerpt</label>
          <textarea value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} rows={2}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-green-400 resize-none" />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-slate-600 mb-1">Content (HTML)</label>
          <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={12}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-green-400 resize-y font-mono" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={save} disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
          style={{ background: "#012241" }}>
          <Save size={15} /> {saving ? "Saving..." : "Save Post"}
        </button>
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input type="checkbox" checked={form.published === 1} onChange={e => setForm({ ...form, published: e.target.checked ? 1 : 0 })} />
          Published
        </label>
        <button onClick={onCancel} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-500 border border-slate-200">
          <X size={15} /> Cancel
        </button>
      </div>
    </div>
  );
}

// ── Blog List ──────────────────────────────────────────────────
function Blogs() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);

  const load = () => {
    setLoading(true);
    api("/api/admin/blogs").then(r => r.json()).then(data => { setPosts(data); setLoading(false); });
  };

  useEffect(load, []);

  const del = async (id: number) => {
    if (!confirm("Delete this post?")) return;
    await api(`/api/admin/blogs/${id}`, { method: "DELETE" });
    load();
  };

  if (editing !== null) return <BlogEditor post={editing} onSave={() => { setEditing(null); load(); }} onCancel={() => setEditing(null)} />;
  if (loading) return <div className="text-center py-20 text-slate-400">Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold" style={{ color: "#012241" }}>Blog Posts <span className="text-sm font-normal text-slate-400">({posts.length})</span></h2>
        <button onClick={() => setEditing(emptyPost)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white"
          style={{ background: "#4BD1A0", color: "#012241" }}>
          <Plus size={15} /> New Post
        </button>
      </div>
      <div className="space-y-3">
        {posts.map(p => (
          <div key={p.id} className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl px-4 py-3">
            {p.image && <img src={p.image} alt="" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 truncate">{p.title}</p>
              <p className="text-xs text-slate-400 mt-0.5">{p.category} · {p.read_time} · {new Date(p.created_at).toLocaleDateString()}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.published ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-400"}`}>
              {p.published ? "Published" : "Draft"}
            </span>
            <div className="flex gap-2">
              <button onClick={() => setEditing(p)} className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><Edit2 size={15} /></button>
              <button onClick={() => del(p.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-400"><Trash2 size={15} /></button>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-center py-10 text-slate-400">No posts yet</p>}
      </div>
    </div>
  );
}

// ── Main Admin ─────────────────────────────────────────────────
export default function Admin() {
  const [auth, setAuth] = useState(!!localStorage.getItem("admin_token"));
  const [tab, setTab] = useState<"contacts" | "blogs">("contacts");

  const logout = () => { localStorage.removeItem("admin_token"); setAuth(false); };

  if (!auth) return <Login onLogin={() => setAuth(true)} />;

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-56 bg-white border-r border-slate-100 flex flex-col">
        <div className="px-5 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#012241" }}>
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-slate-800">Assetica</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <button onClick={() => setTab("contacts")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${tab === "contacts" ? "text-white" : "text-slate-500 hover:bg-slate-50"}`}
            style={tab === "contacts" ? { background: "#012241" } : {}}>
            <Users size={16} /> Contacts
          </button>
          <button onClick={() => setTab("blogs")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${tab === "blogs" ? "text-white" : "text-slate-500 hover:bg-slate-50"}`}
            style={tab === "blogs" ? { background: "#012241" } : {}}>
            <FileText size={16} /> Blog Posts
          </button>
        </nav>
        <div className="p-3 border-t border-slate-100">
          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="ml-56 p-8">
        {tab === "contacts" ? <Contacts /> : <Blogs />}
      </div>
    </div>
  );
}
