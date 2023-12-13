using Raven.Client.Documents;

namespace lum.db.model.DbContext
{

    public interface IRavenDbContext
    {
        public IDocumentStore store { get; }
    }

}