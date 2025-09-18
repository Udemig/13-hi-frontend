import type { FC, FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { X, Check } from "lucide-react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { mdeOptions, selectStyles } from "../../utils/constants";
import ReactSelect from "react-select/creatable";

const Form: FC = () => {
  const { id } = useParams<{ id: string }>();

  // düzenleme modunda mıyız?
  const isEdit = !!id;

  // form göndeirlince:
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* Sayfa Başlığı */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">{isEdit ? "Not Düzenle" : "Yeni Not Oluştur"}</h1>
          <p className="text-text-secondary">Fikirlenizi ve notlarınızı kaydedin</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card p-6 sm:p-8 animate-slide-up">
        {/* Başlık */}
        <div className="mb-6">
          <label htmlFor="title" className="label">
            Başlık:
          </label>

          <input
            type="text"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-text-primary focus:ring-2 focus:ring-primary/30 transition"
            placeholder="Not başlığı..."
          />
        </div>

        {/* İçerik */}
        <div className="mb-6">
          <label htmlFor="content" className="label">
            İçerik:
          </label>

          <SimpleMDE options={mdeOptions} className="w-full markdown-editor" />
        </div>

        {/* Etiketler */}
        <div className="mb-6">
          <label htmlFor="tags" className="label">
            Etiketler:
          </label>

          <ReactSelect isMulti styles={selectStyles} />
        </div>

        {/* Butonlar */}
        <div className="flex flex-col md:flex-row gap-3 pt-4 border-t border-border">
          <Link to="/" className="form-button">
            <X className="size-4 mr-1.5" />
            İptal
          </Link>

          <button type="submit" className="form-button bg-primary hover:bg-primary-hover">
            <Check className="size-4 mr-1.5" />
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
