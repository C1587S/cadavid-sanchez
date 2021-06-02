## Methodology

In our definition of the SM, academic institutions competing for students must be inside a CZ. Additionally, behavioral student data must support that some students switched between schools in the same market. In this section, we will explain how each element is calculated.

### Data Sources

##### School Data

The data used for collecting administrative and geographic information of schools comes from several resources. We validated information between databased from [Instituto Nacional de la Infraestructura Física Educativa (INIFED)](https://www.gob.mx/inifed), [Instituto Nacional para la Evaluación de la Educación (INEE)](https://historico.mejoredu.gob.mx/evaluaciones/sire/sire-bases-de-datos/), and [Secretaría de Educación Pública (SEP)](https://www.gob.mx/sep). We collected information for 240,620 schools at primary and high school levels. 

##### Students' Migration Data

We collected information from students who switched schools (*switchers*) from data provided by the SEP on the [ENLACE](http://dgece.sev.gob.mx/difusion/resultadosenlace/) (Evaluación Nacional de Logros Académicos en Centros Escolares) standardized test between 2006 and 2013. In particular, each year, we can track in which academic institution a student takes the test and therefore infer how switched from schools during the analyzed years. We define students who changed schools as _switchers_.

### Commuting Zones: A Geometric Approach

Students' migrations could occur not necessarily because of changes in parents' preferences for schools. Some migration dynamics could be explained by different factors, for example, families moving from their original city. For avoiding those mechanisms, before detecting school markets by themselves, we delimited geographic areas in which school markets could exist, *CZ*. Traditionally, topological approaches have been used for constructing CZ such as administrative territorial divisions. In this work, we use the 2,469 municipalities of the Mexican territory as the baseline for building CZ and compare the results as described in the next section. 



We followed a geometric approach for calculating CZ:

1. Using coordinates from schools, calculate circular buffers using different radios (5 km, 8 km, and 10 km) to detect geographically close schools. 
2. Calculate the convex hull area associated with schools belonging to the same buffers (with three or more units)
3. We calculate convex hull unions

Finally, we define CZ as convex hull unions or buffers with less than three schools. In the following example there is an illustration of the process.