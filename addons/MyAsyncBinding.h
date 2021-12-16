#include <nan.h>

class MyAsyncBinding {
public:
  static NAN_MODULE_INIT(Init);
  static NAN_METHOD(GetCylinder);
  static NAN_METHOD(GetPoint);
  static NAN_METHOD(SetPoint);
  static NAN_METHOD(GetLine);
  static NAN_METHOD(SetLine);
  static NAN_METHOD(ResizeLine);
  static NAN_METHOD(CreateCylinder);
  static NAN_METHOD(SetCylinderVolume);
  static NAN_METHOD(ChangeCylinderSize);
  static NAN_METHOD(GetRectangle);
  static NAN_METHOD(SetRectangle);
  static NAN_METHOD(SetRectangleVolume);
  static NAN_METHOD(ChangeRectangleSize);
  static NAN_METHOD(convertSTL);
};


#include <sstream>

//Supporting methods
size_t find_ext_idx(const char* fileName)
{
	size_t len = strlen(fileName);
	size_t idx = len - 1;
	for (size_t i = 0; *(fileName + i); i++) {
		if (*(fileName + i) == '.') {
			idx = i;
		}
		else if (*(fileName + i) == '/' || *(fileName + i) == '\\') {
			idx = len - 1;
		}
	}
	return idx + 1;
}

std::string get_file_ext(const char* fileName)
{
	return std::string(fileName).substr(find_ext_idx(fileName));
}

std::string renameExtensionToSTL(const char* fileName)
{
	return std::string(fileName).substr(0, std::string(fileName).find_last_of('.')) + ".stl";
}
