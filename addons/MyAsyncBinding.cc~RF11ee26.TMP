#include "MyAsyncBinding.h"
#include "parasolid_kernel.h"

NAN_MODULE_INIT(MyAsyncBinding::Init) {
    Nan::SetMethod(target, "GetPoint", GetPoint);
    Nan::SetMethod(target, "SetPoint", SetPoint);
    Nan::SetMethod(target, "SetLine", SetLine);
    Nan::SetMethod(target, "GetLine", GetLine);
    Nan::SetMethod(target, "ResizeLine", ResizeLine);
    Nan::SetMethod(target, "SetCylinder", CreateCylinder);
    Nan::SetMethod(target, "GetCylinder", GetCylinder);
    Nan::SetMethod(target, "SetCylinderVolume", SetCylinderVolume);
    Nan::SetMethod(target, "ChangeCylinderSize", ChangeCylinderSize);
    Nan::SetMethod(target, "GetRectangle", GetRectangle);
    Nan::SetMethod(target, "SetRectangle", SetRectangle);
    Nan::SetMethod(target, "SetRectangleVolume", SetRectangleVolume);
    Nan::SetMethod(target, "ChangeRectangleSize", ChangeRectangleSize);
    Nan::SetMethod(target, "convertSTL", convertSTL);
}

NODE_MODULE(occAddon, MyAsyncBinding::Init)


class convertSTLMyAsyncWorker : public Nan::AsyncWorker {
public:
	std::string filename;
	bool throwsError;

	convertSTLMyAsyncWorker(std::string filename, bool throwsError, Nan::Callback *callback)
		: Nan::AsyncWorker(callback) {

		this->filename = filename;
		this->throwsError = throwsError;
	}

	void Execute() {

	}

	void HandleOKCallback() {
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(), // no error occured
			Nan::New(!throwsError)
		};
		Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
	}

	void HandleErrorCallback() {
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
			Nan::Null()
		};
		Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
	}
};

class GetPointMyAsyncWorker : public Nan::AsyncWorker {
public:
	double x;
    double y;
	bool throwsError;

	GetPointMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback *callback)
		: Nan::AsyncWorker(callback) {

		this->x = x;
        this->y = y;
		this->throwsError = throwsError;
	}

	void Execute() {

	}

	void HandleOKCallback() {
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::Null(), // no error occured
			Nan::New(!throwsError)
		};
		Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
	}

	void HandleErrorCallback() {
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
			Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
			Nan::Null()
		};
		Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
	}
};

class SetPointMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    SetPointMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class GetLineMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    GetLineMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class SetLineMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    SetLineMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class ResizeLineMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    ResizeLineMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class CreateCylinderMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    CreateCylinderMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class SetCylinderVolumeMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    SetCylinderVolumeMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class ChangeCylinderSizeMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    ChangeCylinderSizeMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class SetRectangleMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    SetRectangleMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class GetRectangleMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    GetRectangleMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class SetRectangleVolumeMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    SetRectangleVolumeMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};

class ChangeRectangleSizeMyAsyncWorker : public Nan::AsyncWorker {
public:
    double x;
    double y;
    bool throwsError;

    ChangeRectangleSizeMyAsyncWorker(double x, double y, bool throwsError, Nan::Callback* callback)
        : Nan::AsyncWorker(callback) {

        this->x = x;
        this->y = y;
        this->throwsError = throwsError;
    }

    void Execute() {

    }

    void HandleOKCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::Null(), // no error occured
            Nan::New(!throwsError)
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }

    void HandleErrorCallback() {
        Nan::HandleScope scope;
        v8::Local<v8::Value> argv[] = {
            Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
            Nan::Null()
        };
        Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
    }
};
class GetCylinderMyAsyncWorker : public Nan::AsyncWorker
{
public:

  double m_cx, m_cy, m_cz;
  bool m_throwsError;
  int m_radius;

  //double volume;
  //double surfaceArea;
  //double bb[6];

  PK_BODY_t extruded_body;// -- - resulting extruded body

  GetCylinderMyAsyncWorker(double cx, double cy, double cz, int radius, bool throwsError, Nan::Callback *callback)
	  : Nan::AsyncWorker(callback)
  {

	  this->m_cx = cx;
	  this->m_cy = cy;
	  this->m_cz = cz;
	  this->m_radius = radius;
	  this->m_throwsError = throwsError;
  }

  std::string CreateFacets()
  {
	  std::string str = "CreateFacets";
	  /* FACET ------------------------------------------- */
	  /// Create lists to store the vertices, normals and faces
	  struct vertex {
		  float x, y, z;
	  };

	  /// Pointers to arrays of facet vertices and normals
	  vertex* myVertexArr = NULL;
	  vertex* myNormalArr = NULL;

	  /// Counters for facet vertices and normals
	  int vertexCtr = 0;
	  int normalCtr = 0;

	  /// Counters for faces and facets
	  int faceCtr = 0;
	  int facetCtr = 0;

	  /// File pointer for file operations
	  FILE* fp = NULL;

	  /// Variables for writing binary STL
	  unsigned int attrib = 0;
	  unsigned long ulong_num_facets = 0;
	  char header_string[] = "012345678901234567890123456789012345678901234567890123456789012345678\n";
	  try
	  {

		  /// Set up faceting options:
		  /// the application asks Parasolid for the tables
		  /// required to get facets and normals and the relationships
		  /// between facets and faces
		  PK_TOPOL_facet_2_o_t opts;
		  PK_TOPOL_facet_2_o_m(opts);
		  opts.choice.facet_fin = PK_LOGICAL_true;
		  opts.choice.fin_data = PK_LOGICAL_true;
		  opts.choice.data_point_idx = PK_LOGICAL_true;
		  opts.choice.facet_face = PK_LOGICAL_true;
		  opts.choice.point_vec = PK_LOGICAL_true;
		  opts.choice.normal_vec = PK_LOGICAL_true;
		  opts.choice.data_normal_idx = PK_LOGICAL_true;

		  PK_TOPOL_facet_2_r_t facetTables;

		  /// Call the Parasolid tabular facetting function
		  PK_ERROR_code_t code = PK_TOPOL_facet_2(0, &extruded_body, NULL, &opts, &facetTables);
		  str = std::string("facet code - ");
		  PK_TOPOL_fctab_facet_fin_t* facetFinTable;
		  PK_TOPOL_fctab_fin_data_t* finDataTable;
		  PK_TOPOL_fctab_data_point_t* dataPointTable;
		  PK_TOPOL_fctab_data_normal_t* dataNormalTable;
		  PK_TOPOL_fctab_point_vec_t* pointVecTable;
		  PK_TOPOL_fctab_normal_vec_t* normalVecTable;
		  PK_TOPOL_fctab_facet_face_t* facetFaceTable;
		  PK_TOPOL_fctab_fin_edge_t* finEdgeTable;

		  //str = std::string("number_of_tables - ") + std::to_string(facetTables.number_of_tables);

		  /// For each of the facet tables
		  for (int i = 0; i < facetTables.number_of_tables; i++)
		  {
			  /// Assign the correct table to the facet table variables
			  if (facetTables.tables[i].fctab == PK_TOPOL_fctab_facet_fin_c)
			  {
				  /// If this is the facet-fin table
				  facetFinTable = facetTables.tables[i].table.facet_fin;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_fin_data_c)
			  {
				  /// If this is the fin-data table
				  finDataTable = facetTables.tables[i].table.fin_data;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_data_point_c)
			  {
				  /// If this is the data-point table
				  dataPointTable = facetTables.tables[i].table.data_point_idx;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_data_normal_c)
			  {
				  /// If this is the data-normal table
				  dataNormalTable = facetTables.tables[i].table.data_normal_idx;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_point_vec_c)
			  {
				  /// If this is the point-vector table
				  pointVecTable = facetTables.tables[i].table.point_vec;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_normal_vec_c)
			  {
				  /// If this is the normal-vector table
				  normalVecTable = facetTables.tables[i].table.normal_vec;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_facet_face_c)
			  {
				  /// If this is the facet-face table
				  facetFaceTable = facetTables.tables[i].table.facet_face;
			  }
			  else if (facetTables.tables[i].fctab == PK_TOPOL_fctab_fin_edge_c)
			  {
				  /// If this is the fin-edge table
				  finEdgeTable = facetTables.tables[i].table.fin_edge;
			  }
		  }

		  //str = std::string("number_of_facets  - ") + std::to_string(facetTables.number_of_facets);;

		  /// Allocate space for arrays of vertices and normals
		  myVertexArr = new vertex[3 * facetTables.number_of_facets];
		  myNormalArr = new vertex[3 * facetTables.number_of_facets];

		  str = "till here..";

		/// For each item in the facet-fin table
		for (int i = 0; i < facetFinTable->length; i++)
		{
			/// Get the fin ID
			int finID = facetFinTable->data[i].fin;

			// Get the index of the fin
			int finIndex = finDataTable->data[finID];

			/// Get the point of the fin
			int point = dataPointTable->point[finIndex];

			/// Get the vector that specifies the point in space
			/// Add the vertex to the vertices list
			/// (convert to 'float' because this is the required storage size for STL)
			myVertexArr[vertexCtr].x = (float)pointVecTable->vec[point].coord[0];
			myVertexArr[vertexCtr].y = (float)pointVecTable->vec[point].coord[1];
			myVertexArr[vertexCtr].z = (float)pointVecTable->vec[point].coord[2];
			vertexCtr++;

			/// Get the normal of the fin
			int normalIndex = dataNormalTable->normal[finIndex];

			/// Add the normal to the normals list
			/// (convert to 'float' because this is the required storage size for STL)
			myNormalArr[normalCtr].x = (float)normalVecTable->vec[normalIndex].coord[0];
			myNormalArr[normalCtr].y = (float)normalVecTable->vec[normalIndex].coord[1];
			myNormalArr[normalCtr].z = (float)normalVecTable->vec[normalIndex].coord[2];
			normalCtr++;
		}

		/// Open file for reading
		fopen_s(&fp, "stl_bin_file.stl", "wb");

		/// A production application would have error-handling in place for failure to open the file

		/// Write the header
		fwrite(header_string, sizeof(byte), 80, fp);

		/// Record the number of facets to write
		ulong_num_facets = (unsigned long)facetTables.number_of_facets;

		//// Write the number of facets into the file
		fwrite(&ulong_num_facets, sizeof(byte), 4, fp);

		/// A production application would have error-handling in place for failure to write to the file

		/// For each facet, write it to the file
		for (facetCtr = 0, normalCtr = 0, vertexCtr = 0; facetCtr < facetTables.number_of_facets; facetCtr++, normalCtr += 3)
		{
			fwrite(&(myNormalArr[normalCtr]), sizeof(byte), 12, fp);
			fwrite(&(myVertexArr[vertexCtr++]), sizeof(byte), 12, fp);
			fwrite(&(myVertexArr[vertexCtr++]), sizeof(byte), 12, fp);
			fwrite(&(myVertexArr[vertexCtr++]), sizeof(byte), 12, fp);
			fwrite(&attrib, sizeof(byte), 2, fp);
		}

		int clodeCode = fclose(fp);

		//str = std::string("clodeCode  - ") + std::to_string(clodeCode);;

		/// A production application would have error-handling in place for failure to close the file

		/// Delete arrays of facet vertices and normals
		delete[] myVertexArr;
		delete[] myNormalArr;

		  m_throwsError = false;
		  str = "success";
	  }
	  catch (...)
	  {
		  m_throwsError = true;
		  this->SetErrorMessage(str.c_str());
	  }

	  return str;
  }

  std::string CreateCylinder(double cx, double cy, double cz, int radius)
  {
	  std::string str = "CreateCylinder";
	  try
	  {

		  PK_AXIS2_sf_t basis_set;

		  PK_CIRCLE_sf_t circle_sf;
		  PK_CIRCLE_t circle;


		  basis_set.location.coord[0] = cx;
		  basis_set.location.coord[1] = cy;
		  basis_set.location.coord[2] = cz;
		  basis_set.axis.coord[0] = 0;
		  basis_set.axis.coord[1] = 0;
		  basis_set.axis.coord[2] = 1;
		  basis_set.ref_direction.coord[0] = 1;
		  basis_set.ref_direction.coord[1] = 0;
		  basis_set.ref_direction.coord[2] = 0;

		  circle_sf.radius = radius;
		  circle_sf.basis_set = basis_set;

		  PK_CIRCLE_create(&circle_sf, &circle);

		  PK_POINT_t point;
		  PK_POINT_sf_t point_sf;
		  PK_BODY_t min_body;

		  PK_INTERVAL_t interval;
		  int        n_new_edges = 0;
		  PK_EDGE_t* new_edges = NULL;
		  int    n_new_faces = 0;
		  PK_FACE_t* new_faces = NULL;

		  point_sf.position.coord[0] = 0.;
		  point_sf.position.coord[1] = 0.;
		  point_sf.position.coord[2] = 0.;

		  PK_POINT_create(&point_sf, &point);
		  PK_POINT_make_minimum_body(point, &min_body);
		  interval.value[0] = 0.;
		  interval.value[1] = 3.14159265;
		  PK_ERROR_code_t code = PK_BODY_imprint_curve(min_body, circle, interval, &n_new_edges, &new_edges, &n_new_faces, &new_faces);
		  str = std::string("PK_BODY_imprint_curve - ") + std::to_string(code);

		  if (n_new_edges)
			  PK_MEMORY_free(new_edges);
		  if (n_new_faces)
			  PK_MEMORY_free(new_faces);

		  str = std::string("freed memory");

		  //returned arguments-- -
		  PK_TOPOL_track_r_t  tracking;
		  PK_TOPOL_local_r_t  results;


		  code = PK_BODY_extrude(min_body, basis_set.ref_direction, 0, &extruded_body, &tracking, &results);
		  str = std::string("PK_BODY_extrude - ") + std::to_string(code);

		  PK_TOPOL_track_r_f(&tracking);
		  PK_TOPOL_local_r_f(&results);

		  PK_ENTITY_delete(1, &min_body);

		  str = std::string("freed memory again");
	  }
	  catch (...)
	  {
		  return str;
	  }

	  return "success";
  }

	void Execute() {

		std::string str = "Execute";

		try
		{
			str = CreateCylinder(m_cx, m_cy, m_cz, m_radius);

			if (str.compare("success") == 0)
			{
				//str = CreateFacets();

				if (str.compare("success") == 0)
					m_throwsError = false;
				else
				{
					m_throwsError = true;
					this->SetErrorMessage(str.c_str());
				}
			}
			else
			{
				m_throwsError = true;
				this->SetErrorMessage(str.c_str());
			}
		}
		catch (...)
		{
			m_throwsError = true;
			this->SetErrorMessage(str.c_str());
		}


	}

	void HandleOKCallback() {
		Nan::HandleScope scope;

		std::ostringstream strs;
		strs << "{\"volume\": \"";
		strs << 12;
		strs << "\",";

		strs << "\"surfaceArea\": \"";
		strs << 23;
		strs << " \" ,";

		strs << "\"boundingBox\": \"[";
		strs << 45; strs << ",";
		strs << 45; strs << ",";
		strs << 45; strs << ",";
		strs << 45; strs << ",";
		strs << 45; strs << ",";
		strs << 45;

		strs << "]\"}";

		std::string json = strs.str();


		v8::Local<v8::Value> argv[] = {
      Nan::Null(), // no error occured
      Nan::New(json).ToLocalChecked()
    };
    Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
	}

	void HandleErrorCallback() {
		Nan::HandleScope scope;
		v8::Local<v8::Value> argv[] = {
      Nan::New(this->ErrorMessage()).ToLocalChecked(), // return error message
      Nan::Null()
    };
    Nan::Call(callback->GetFunction(), Nan::GetCurrentContext()->Global(), 2, argv);
  }
};

NAN_METHOD(MyAsyncBinding::GetCylinder) {
	if (info.Length() == 5)
	{
		if (!info[0]->IsNumber()) {
			return Nan::ThrowError(Nan::New("expected arg 0: double cx").ToLocalChecked());
		}

		if (!info[1]->IsNumber()) {
			return Nan::ThrowError(Nan::New("expected arg 1: double cy").ToLocalChecked());
		}

		if (!info[2]->IsNumber()) {
			return Nan::ThrowError(Nan::New("expected arg 2: double cz").ToLocalChecked());
		}

		if (!info[3]->IsNumber()) {
			return Nan::ThrowError(Nan::New("expected arg 3: int radius").ToLocalChecked());
		}

		if (!info[4]->IsFunction()) {
			return Nan::ThrowError(Nan::New("expected arg 4: function callback").ToLocalChecked());
		}



		Nan::Maybe<double> valueCx = Nan::To<double>(info[0]);
		Nan::Maybe<double> valueCy = Nan::To<double>(info[1]);
		Nan::Maybe<double> valueCz = Nan::To<double>(info[2]);
		Nan::Maybe<int> valueRad = Nan::To<int>(info[3]);

		/*std::string str = GetCylinderMyAsyncWorker::MyExecute(valueCx.FromJust(),
			valueCy.FromJust(),
			valueCz.FromJust(),
			valueRad.FromJust());*/

		std::ostringstream strs;
		strs << "{\"volume\": \"";
		strs << 12;
		strs << "\",";

		strs << "\"surfaceArea\": \"";
		strs << 23;
		strs << " \" ,";

		strs << "\"boundingBox\": \"[";
		strs << 2; strs << ",";
		strs << 2; strs << ",";
		strs << 2; strs << ",";
		strs << 2; strs << ",";
		strs << 2; strs << ",";
		strs << 2;

		strs << "]\"}";

		std::string json = strs.str();

		//info.GetReturnValue().Set(Nan::New(json).ToLocalChecked());

		// starting the async worker
		Nan::AsyncQueueWorker(new GetCylinderMyAsyncWorker(
			valueCx.FromJust(),
			valueCy.FromJust(),
			valueCz.FromJust(),
			valueRad.FromJust(),
			false,
			new Nan::Callback(info[4].As<v8::Function>())
		));
	}
}

NAN_METHOD(MyAsyncBinding::GetPoint) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::SetPoint) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::GetLine) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::SetLine) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::ResizeLine) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::CreateCylinder) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::SetCylinderVolume) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::ChangeCylinderSize) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::GetRectangle) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::SetRectangle) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::SetRectangleVolume) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::ChangeRectangleSize) {
    return Nan::ThrowError(Nan::New("expected arg x and y").ToLocalChecked());
}
NAN_METHOD(MyAsyncBinding::convertSTL) {
	if (!info[0]->IsString()) {
		return Nan::ThrowError(Nan::New("expected arg 0: string filename").ToLocalChecked());
	}
	if (!info[1]->IsFunction()) {
		return Nan::ThrowError(Nan::New("expected arg 1: function callback").ToLocalChecked());
	}

	// starting the async worker
	Nan::AsyncQueueWorker(new convertSTLMyAsyncWorker(
		std::string(*Nan::Utf8String(info[0])),
		false,
		new Nan::Callback(info[1].As<v8::Function>())
	));

}
